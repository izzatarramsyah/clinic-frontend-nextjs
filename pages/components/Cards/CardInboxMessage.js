import {useState, React} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

import { userService } from "../../../services/UserServices.js";

export default function CardInboxMessage({isLoading, slcParameter, listMessage, handleChangeparam, sendMessage}) {

  const [message, setMessage] = useState("");
    
  return (
    <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-[#F0F3FE] border-0">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-8">
                <div className="flex lg:w-12/12 mb-5">
                  <div class="w-full px-5">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password" > Pilih Dokter
                      </label>
                      <select onChange={(e)=> handleChangeparam(e.target.value)} defaultValue="none" 
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                        <option key="none" value="none" disabled={true}> -- Silahkan Pilih -- </option>
                        {slcParameter?.map(option => (
                          <option key={option._id} value={option.fullname}>
                            {option.fullname}
                          </option>
                        ))}
                      </select>
                    </div>
                </div>
                <div className="flex lg:w-12/12">
                    <div class="w-full px-5 flex flex-col justify-between">
                        <div class="flex flex-col mt-5">
                        {listMessage?.map((row, index) => (
                          (  row.from == userService.userValue.username ? 
                            <div class="flex justify-end mb-4">
                              <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white" >
                              {row.message}
                              </div>
                            </div>
                            :
                            <div class="flex justify-start mb-4">
                              <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                              {row.message}
                              </div>
                          </div>
                          )
                        )) || []}
                        <input
                            value={message}
                            onChange={(e)=> setMessage(e.target.value)}
                            class="border-0 px-3 py-6 mt-5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            type="text"
                            placeholder="type your message here..."
                        />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-6">                  
                  <div>
                  { (  isLoading ? 
                    <button
                      className="bg-[#00D2A0] active:bg-[#00D2A0] text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button" disabled>  
                      <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                      </svg>
                      Loading...
                    </button> :
                    <button
                      className="bg-[#00D2A0] active:bg-[#00D2A0] text-white font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-4 ease-linear transition-all duration-150"
                      type="button" onClick={()=> sendMessage({message})}> Kirim 
                    </button>
                  )} 
                  </div> 
                </div>
            </div>
        </div>
    </>
  );
}

