import React, { useState, useEffect } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/react';
import FadeInSection from './FadeInSection';

function WaitForLoad(props) {
  const [loading, setLoading] = useState(true);

  const override = css`
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-color: red;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div
          className="loading-page"
          style={{
            width: '70%',
            margin: 'auto',
            paddingTop: '50vh',
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
        <FadeInSection>{props.children}</FadeInSection>
      )}
    </>
  );
}

export default WaitForLoad;
