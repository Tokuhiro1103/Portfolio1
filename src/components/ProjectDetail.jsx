import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectTProDetail from './projectDetails/ProjectTProDetail';
import ProjectApiDetail from './projectDetails/ProjectApiDetail';
import ProjectNotaktoDetail from './projectDetails/ProjectNotaktoDetail';
import ProjectECsiteDetail from './projectDetails/ProjectECsiteDetail';
import ProjectPortfolioDetail from './projectDetails/ProjectPortfolioDetail';

const ProjectDetail = () => {
  const { id } = useParams();
  if (id === '1') return <ProjectTProDetail />;
  if (id === '2') return <ProjectApiDetail />;
  if (id === '3') return <ProjectNotaktoDetail />;
  if (id === '4') return <ProjectECsiteDetail />;
  if (id === '5') return <ProjectPortfolioDetail />;
  return <div className="container-max py-16 text-center">Project not found</div>;
};

export default ProjectDetail; 