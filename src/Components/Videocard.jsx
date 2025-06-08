import React from 'react';

const Videocard = ({ info }) => {
  if (!info) return null; // or return a loader/shimmer

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
  <div className="p-2 m-2 w-72 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100 cursor-pointer h-80">
  <img
    src={thumbnails.medium.url}
    alt={title}
    className="rounded-lg"
  />
  <ul className="mt-4">
    <li className="font-bold">{title}</li>
    <li className="text-sm text-gray-600">{channelTitle}</li>
    <li className="text-sm text-gray-500">{statistics?.viewCount} views</li>
  </ul>
</div>
  );
};

export default Videocard;
