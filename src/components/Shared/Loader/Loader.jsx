import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <span className="loader2"></span>
      <span class="loader"></span>
    </div>
  );
}
