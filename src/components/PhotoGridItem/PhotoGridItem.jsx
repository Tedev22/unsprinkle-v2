import React from 'react';
import styled from 'styled-components';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
          type = "image/avif"
          srcSet ={`
          ${src.replace('.jpg', '.avif')} 1x,
          ${src.replace('.jpg', '@2x.avif')} 2x,
          ${src.replace('.jpg', '@3x.avif')} 3x
          `}
          />
          <source
          type = "image/jpeg"
          srcSet ={`
          ${src} 1x,
          ${src.replace('.jpg', '@2x.jpeg')} 2x,
          ${src.replace('.jpg', '@3x.jpeg')} 3x
          `}
          />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px 0; 
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  margin: 0 8px 0 0; 
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  max-width: 10px;
  
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
