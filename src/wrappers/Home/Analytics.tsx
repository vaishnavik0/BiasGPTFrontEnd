import { useState } from "react";
import { Button } from "../../components/ui/button"
import * as XLSX from "xlsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { CardTitle } from "../../components/ui/card";

export const exportToExcel = (data, fileName = 'data.xlsx') => {
  // Create a new workbook
  const workbook = XLSX.utils.book_new();

  // Convert the JSON array to a worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Append the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  // Write the workbook and trigger a download
  XLSX.writeFile(workbook, fileName);
};

const Analytics = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, 'ratings'));
    const dataArray = querySnapshot.docs.map(doc => {
      const data = doc.data();
  
      // Assuming the timestamp is in a field called 'timestamp'
      if (data.timestamp) {
        const firestoreTimestamp = data.timestamp;
        const milliseconds = (firestoreTimestamp.seconds * 1000) + (firestoreTimestamp.nanoseconds / 1000000);
        const date = new Date(milliseconds);
  
        // Convert the date to a readable format and add it to the data object
        data.time = date.toLocaleString(); // or date.toUTCString() for UTC format
      }
  
      return data;
    });
  
    setData(dataArray);
  };

  console.log(data);
  
  
  const handleExport = () => {
    fetchData().then(() => {
      console.log(data);
      
      exportToExcel(data, 'firestore-data.xlsx');
    });
  };

  return (
    <section className='flex w-screen h-full items-center justify-center'>
      <CardTitle>
        Download CSV
      </CardTitle>
      <div className="chart w-1/2 h-full flex items-center justify-center">
          <Button onClick={handleExport} variant="secondary">
            Download
          </Button>
      </div>
    </section>
  )
}

export default Analytics