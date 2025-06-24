import { useState, useEffect } from 'react';
import { mockEstimates } from '../data/mockData';

export const useEstimates = () => {
  const [estimates, setEstimates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate loading from API
    const loadEstimates = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Load from localStorage if available, otherwise use mock data
        const savedEstimates = localStorage.getItem('estimates');
        if (savedEstimates) {
          setEstimates(JSON.parse(savedEstimates));
        } else {
          setEstimates(mockEstimates);
          localStorage.setItem('estimates', JSON.stringify(mockEstimates));
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadEstimates();
  }, []);

  const addEstimate = (estimate) => {
    const newEstimate = {
      ...estimate,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0]
    };
    
    const updatedEstimates = [newEstimate, ...estimates];
    setEstimates(updatedEstimates);
    localStorage.setItem('estimates', JSON.stringify(updatedEstimates));
    
    return newEstimate;
  };

  const updateEstimate = (id, updates) => {
    const updatedEstimates = estimates.map(estimate =>
      estimate.id === id ? { ...estimate, ...updates } : estimate
    );
    setEstimates(updatedEstimates);
    localStorage.setItem('estimates', JSON.stringify(updatedEstimates));
  };

  const deleteEstimate = (id) => {
    const updatedEstimates = estimates.filter(estimate => estimate.id !== id);
    setEstimates(updatedEstimates);
    localStorage.setItem('estimates', JSON.stringify(updatedEstimates));
  };

  const getEstimateById = (id) => {
    return estimates.find(estimate => estimate.id === parseInt(id));
  };

  const getEstimatesByStatus = (status) => {
    return estimates.filter(estimate => estimate.status === status);
  };

  const getTotalRevenue = () => {
    return estimates
      .filter(estimate => estimate.status === 'completed')
      .reduce((total, estimate) => total + estimate.totalCost, 0);
  };

  const getActiveProjects = () => {
    return estimates.filter(estimate => estimate.status === 'in-progress').length;
  };

  return {
    estimates,
    loading,
    error,
    addEstimate,
    updateEstimate,
    deleteEstimate,
    getEstimateById,
    getEstimatesByStatus,
    getTotalRevenue,
    getActiveProjects
  };
};