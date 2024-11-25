import React from "react";

const GoogleMap = () => {
  return (
    <div className="my-10">
      <iframe
        className="w-full h-96 mx-auto"
        sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-modals allow-storage-access-by-user-activation"
        frameBorder="0"
        aria-label="Map, Untitled Location"
        src="https://maps-api-ssl.google.com/maps?hl=en&amp;ll=24.3796650,88.5649604&amp;output=embed&amp;q=24.3796650,88.5649604+(Untitled+Location)&amp;z=19"
        allowFullScreen=""
      ></iframe>
      <div className="space-y-6">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Our Address</h3>
          <p className="text-gray-600">
            Home
            <br />
            Rajshahi City, Rajshahi Division
            <br />
            Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
