'use client';

import { useState } from 'react';
import Image from 'next/image';

import reactImg from '../../assets/languages/react.png';
import typescriptImg from '../../assets/languages/TypeScript.png';
import javascriptImg from '../../assets/languages/javascript.png';
import pythonImg from '../../assets/languages/PYTHON.png';
import djangoImg from '../../assets/languages/django.png';
import nodeImg from '../../assets/languages/NODE.png';
import vueImg from '../../assets/languages/vue.png';
import angularImg from '../../assets/languages/anguler.png';
import mongodbImg from '../../assets/languages/mongodb.png';
import postgresqlImg from '../../assets/languages/Postgresql.png';
import mysqlImg from '../../assets/languages/mysql.png';
import redisImg from '../../assets/languages/redis.png';
import dockerImg from '../../assets/languages/dok.png';
import kubernetesImg from '../../assets/languages/Kubernetes.png';
import awsImg from '../../assets/languages/aws.png';
import azureImg from '../../assets/languages/Azure.png';
import gcpImg from '../../assets/languages/gcp.png';

const imageMap: Record<string, { src: typeof reactImg; name: string }> = {
  React: { src: reactImg, name: 'React' },
  TypeScript: { src: typescriptImg, name: 'TypeScript' },
  JavaScript: { src: javascriptImg, name: 'JavaScript' },
  Python: { src: pythonImg, name: 'Python' },
  Django: { src: djangoImg, name: 'Django' },
  'Node.js': { src: nodeImg, name: 'Node.js' },
  'Vue.js': { src: vueImg, name: 'Vue.js' },
  Angular: { src: angularImg, name: 'Angular' },
  MongoDB: { src: mongodbImg, name: 'MongoDB' },
  PostgreSQL: { src: postgresqlImg, name: 'PostgreSQL' },
  MySQL: { src: mysqlImg, name: 'MySQL' },
  Redis: { src: redisImg, name: 'Redis' },
  Docker: { src: dockerImg, name: 'Docker' },
  Kubernetes: { src: kubernetesImg, name: 'Kubernetes' },
  AWS: { src: awsImg, name: 'AWS' },
  Azure: { src: azureImg, name: 'Azure' },
  GCP: { src: gcpImg, name: 'GCP' },
};

const CATEGORIES = [
  { id: 'backend', label: 'Backend', techs: ['Django', 'Node.js', 'Python'] },
  { id: 'frontend', label: 'Frontend', techs: ['React', 'TypeScript', 'JavaScript', 'Vue.js', 'Angular'] },
  { id: 'databases', label: 'Databases', techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
  { id: 'cloud', label: 'Cloud & DevOps', techs: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP'] },
] as const;

export default function ServiceTechStack() {
  const [activeCategory, setActiveCategory] = useState<string>('cloud');

  const activeTechs = CATEGORIES.find((c) => c.id === activeCategory)?.techs ?? [];

  return (
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-[#0859B2] text-center mb-8">
        Top Technologies That We Utilize
      </h2>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
              activeCategory === cat.id
                ? 'bg-[#0859B2] text-[#51CFDF] shadow-lg'
                : 'bg-white border-2 border-[#0859B2] text-[#0859B2] hover:bg-[#0859B2]/5'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {activeTechs.map((tech) => {
          const img = imageMap[tech];
          return (
            <div
              key={tech}
              className="bg-white border border-[#51CFDF]/40 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:border-[#51CFDF] hover:shadow-lg hover:shadow-[#51CFDF]/20 transition-all duration-300"
              style={{ boxShadow: '0 2px 8px rgba(81, 207, 223, 0.08)' }}
            >
              {img && (
                <div className="relative w-14 h-14">
                  <Image src={img.src} alt={tech} fill className="object-contain" sizes="56px" />
                </div>
              )}
              <span className="text-sm font-medium text-[#0859B2]">{img?.name ?? tech}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
