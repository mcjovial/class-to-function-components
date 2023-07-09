import React, { useState } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const handleError = (error, errorInfo) => {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return <h1>Something went wrong. Please try again.</h1>;
  }

  return <React.ErrorBoundary onError={handleError}>{children}</React.ErrorBoundary>;
}

function App() {
  return (
    <div>
      <h1>Error Boundary Example</h1>
      <ErrorBoundary>
        {/* Components where errors might occur */}
      </ErrorBoundary>
    </div>
  );
}
