/*
 * useProjects Hook
*/

// Libs
import {useState, useEffect} from 'react'

// Services
import getProjects from 'services/getProjects'

// Export
export function useProjects() {

  // States
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState({})

  // Retrive data from service, and update states
  useEffect(function () {
    getProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  return {loading, projects}

}