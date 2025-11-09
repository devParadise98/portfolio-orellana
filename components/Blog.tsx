
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const blogData = [
  {
    category: 'UI/UX Design',
    author: 'Jayesh Patil',
    date: '10 Nov, 2023',
    title: 'Design Unraveled: Behind the Scenes of UI/UX Magic',
    imgSrc: 'https://picsum.photos/seed/blog1/400/300',
  },
  {
    category: 'App Design',
    author: 'Jayesh Patil',
    date: '09 Oct, 2023',
    title: 'Sugee: Loan Management System for Rural Sector.',
    imgSrc: 'https://picsum.photos/seed/blog2/400/300',
  },
  {
    category: 'App Design',
    author: 'Jayesh Patil',
    date: '13 Aug, 2023',
    title: 'Cinetrade: Innovative way to invest in Digital Media',
    imgSrc: 'https://picsum.photos/seed/blog3/400/300',
  },
];

const BlogCard: React.FC<typeof blogData[0]> = ({ category, author, date, title, imgSrc }) => (
  <div className="group">
    <div className="relative mb-6">
      <img src={imgSrc} alt={title} className="rounded-3xl w-full" />
      <div className="absolute -bottom-4 right-4 bg-gray-800 text-white rounded-full p-4 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
        <FiArrowUpRight size={24} />
      </div>
    </div>
    <span className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm">{category}</span>
    <div className="text-sm text-gray-500 mt-4">
      <span className="text-primary mr-1">•</span> {author}
      <span className="mx-2">|</span>
      {date}
    </div>
    <h3 className="text-xl font-bold mt-2 hover:text-primary transition-colors cursor-pointer">{title}</h3>
  </div>
);

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            From my <span className="text-primary">blog post</span>
          </h2>
          <a href="#" className="bg-primary text-black font-semibold rounded-full px-6 py-3">
            See All
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
