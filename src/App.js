import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./logo.css";

function App() {
  const sliders = [
    {
      id: 1,
      header: "Lorem Ipsum",
      info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      image:
        "https://images.unsplash.com/photo-1625474684644-8bd862963274?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      id: 2,
      header: "Lorem Ipsum",
      info: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source",
      image:
        "https://images.unsplash.com/photo-1625429501995-3571518ffdb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 3,
      header: "Lorem Ipsum",
      info: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance",
      image:
        "https://images.unsplash.com/photo-1621731377204-7b7c37c246e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    },
    {
      id: 4,
      header: "Lorem Ipsum",
      info: "Donec vel nisl elit. Phasellus non faucibus justo, vitae commodo diam. Donec vehicula volutpat pretium. Praesent ac nibh ac metus tincidunt commodo faucibus ut felis",
      image:
        "https://images.unsplash.com/photo-1621418275060-6fccb2bd4514?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    },
  ];
  const [id, setId] = useState(1);
  const slidersLength = sliders.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (id >= slidersLength) {
        setId(1);
      } else {
        setId(id + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [id, slidersLength]);

  const nextSlider = () => {
    if (id === slidersLength) {
      setId(1);
    } else {
      setId(id + 1);
    }
  };

  const previousSlider = () => {
    if (id <= 1) {
      setId(slidersLength);
    } else {
      setId(id - 1);
    }
  };

  return (
    <div className="w-full h-screen mx-auto p-6">
      <img src={logo} className="logo mx-auto" alt="logo" />
      {sliders.map((slider) => (
        <div
          key={slider.id}
          className="container mx-auto"
          style={{ display: id === slider.id ? "block" : "none" }}
        >
          <div
            className="bg-cover bg-center h-auto text-white py-12 px-10 object-fill"
            style={{
              backgroundImage: `url(${slider.image})`,
            }}
          >
            <div className="md:w-1/3">
              <p className="font-bold text-2xl uppercase">{slider.header}</p>
              <p className="text-lg mb-10 leading-none p-2 word-break">
                {slider.info}
              </p>
              <button className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">
                Details
              </button>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => previousSlider()}
                className="dark:text-white mr-2 px-3 py-1 bg-purple-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
              </button>
              <button
                onClick={() => nextSlider()}
                className="dark:text-white mr-2 px-3 py-1 bg-purple-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
