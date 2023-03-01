/*
 * Project List Component
*/

// Libs
import React, {lazy, Suspense} from 'react'

// Hooks
import { useProjects } from 'hooks/useProjects'

// Components
import Spinner from 'components/Spinner'

// Export
export default function ProjectList({ type = "list" }) {

  // States
  const {loading, projects} = useProjects()
  
  // Render
  if (loading) {

    // Page Loader
    return "Loading..."
    
  } else {

    // Page Content
    return (

      <ul className={`type-${type}`}>
        <Suspense fallback={<Spinner />}>
          {projects.map(({slug, client, heading, id, images}) => {
          
            if(type === "slider"){

              // Import Dinamic Component
              const ProjectImage = lazy(() => import('components/ProjectImage'))
                
              // Image Slider
              return (
                <ProjectImage 
                  key={id}
                  slug={slug}
                  client={client}
                  heading={heading}
                  images={images}
                />
              )

            }else{

              // Import Dinamic Component
              const ProjectLink = lazy(() => import('components/ProjectLink'))

              // List of Links
              return (
                <ProjectLink 
                  key={id}
                  slug={slug}
                  client={client}
                  heading={heading}
                />
              )

            }

          })}
        </Suspense>
      </ul>
    );
  }

}