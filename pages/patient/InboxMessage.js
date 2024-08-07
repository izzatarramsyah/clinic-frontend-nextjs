import {useState, useEffect, React} from 'react'
import DatePicker from "react-datepicker";
import moment from 'moment';

// layout for page
import Admin from "../layouts/Admin.js";

// components
import CardInboxMessage from "../components/Cards/CardInboxMessage.js";
import CardFormSearch from "../components/Cards/CardFormSearch.js";
import CardTable from "../components/Cards/CardTable.js";
import ModalTable from "../components/Modal/ModalTable.js";

// serivces
import { restService } from "../../services/RestService.js";
import { userService } from "../../services/UserServices.js";

export default function InboxMessage() {
  
  const [loading, isLoading] = useState(false);

  const [listMessage, setListMessage] = useState([]);

  const [slcDoctor, setSlcDoctor] = useState([]);
  const [doctor, setDoctor] = useState("");

  useEffect(() => {
    const loadDoctor = async () => {
        restService.get(`${process.env.BASE_URL}/doctor/getListDoctor`).then((response) => {
            console.log(response)
            setSlcDoctor(response.data.object);    
        });
      };
      loadDoctor();
  },[]);

  const handleSendMessage = (data) => {
    isLoading(true);
    const req = {
        from: userService.userValue.username,
        to: doctor,
        message: data.message
    }
    restService.post(`${process.env.BASE_URL}/message/saveMessage`, req ).then((response) => {
      isLoading(false);
      if ( response.status == '200' ) {
        setListMessage([...listMessage, response.data.object]);
      }
    });
  }

  const changeDoctor = (value) => {
    setDoctor(value);
    try { 
      const request = {
        from: userService.userValue.username,
        to: value
      }
      restService.post(`${process.env.BASE_URL}/message/getListMessage`, request ).then((response) => {
        debugger;
        if ( response.status == '200') { 
          setListMessage(response.data.object)
        } 
      });
    } catch (e) {
      console.log(e);
    }
  }
  

  return (
    <Admin>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
           <CardInboxMessage isLoading={loading} slcParameter={slcDoctor} listMessage={listMessage}
            changeDoctor={changeDoctor} sendMessage={handleSendMessage} />
        </div>
      </div>
    </Admin>
  );
}