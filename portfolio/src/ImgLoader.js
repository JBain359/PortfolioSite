import React, { useState, useEffect } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/react';
import FadeInSection from './FadeInSection';

function ImgLoader(source, alt) {
  const [loading, setLoading] = useState(true);

  const override = css`
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-color: red;
  `;

  useEffect(() => {}, [loading]);

  return (
    <>
      <FadeInSection>
        <img
          style={loading ? { display: 'none' } : {}}
          src={source}
          alt={alt}
          onLoad={() => setLoading(false)}
        />
      </FadeInSection>
      {/* {loading ? (
        <div
          style={{
            width: '70%',
            margin: 'auto',
            textAlign: 'center',
          }}
        >
          <ScaleLoader
            color="#ffa800"
            loading={loading}
            css={override}
            radius={0}
            height={20}
            width={20}
            margin={10}
          />
        </div>
      ) : (
        
      )} */}
    </>
  );
}

export default ImgLoader;
