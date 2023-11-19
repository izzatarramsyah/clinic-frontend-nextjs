import Link from "next/link";
import Auth from "../layouts/Auth.js";
import { useState, useEffect, React } from "react";
import Image from "next/image";

// serivces

export default function Register(handleRegister, isLoading) {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nik, setNik] = useState("");
  const [bpjsNo, setBpjsNo] = useState("");

  const doRegister = async (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
        handleRegister({
        email: email,
        password: password,
        nik : nik,
        bpjsNo : bpjsNo
      });
    }
  };

  return (
    <>
      <div>
        <form className="mb-0 space-y-3">
          <div>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-1 px-3 py-3 placeholder-blueGray-350 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div>
            <div className="mt-4">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-1 px-3 py-3 placeholder-blueGray-350 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div>
            <div className="mt-4">
              <input
                id="nik"
                name="nik"
                type="text"
                placeholder="Nomor Induk Kependudukan"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
                className="border-1 px-3 py-3 placeholder-blueGray-350 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div>
            <div className="mt-4">
              <input
                id="bpjsNo"
                name="bpjsNo"
                type="text"
                placeholder="Nomor BPJS"
                value={bpjsNo}
                onChange={(e) => setBpjsNo(e.target.value)}
                className="border-1 px-3 py-3 placeholder-blueGray-350 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div>
          <button
              onClick={doRegister}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#002DBB] hover:bg-[#002DBB] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#002DBB]"
            >
              {isLoading ? (
                <div>
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="#1C64F2"
                    />
                  </svg>
                  Loading...
                </div>
              ) : (
                <div> Daftar </div>
              )}
              </button>
          </div>
        </form>
        <p className="mt-2 text-xs font-light text-center text-gray-700">
          Sudah jadi XL GROSIR?
          <Link legacyBehavior href="/auth/Login">
            <a className="font-medium text-[#002DBB] hover:underline">
              {" "}
              Masuk sekarang{" "}
            </a>
          </Link>
        </p>
      </div>
    </>
  );
}
