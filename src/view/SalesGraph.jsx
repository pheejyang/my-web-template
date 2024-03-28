import React from 'react';
import { Line } from 'react-chartjs-2';

const SalesGraph = ({ salesData }) => {
  const dates = salesData.map(item => item.date);
  const sales = salesData.map(item => item.sale);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Sales',
        data: sales,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <>
      <div>
        <h>Summary of Today's Sales</h>
        <Line data={data} />
      </div>
      <div className='grid grid-cols-2  gap-4 m-2 mx-auto left-6 '>
        <div className=' text-center p-5 w-48 mx-4 h-36 border rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 ...'>
            <div className='flex items-center justify-center my-3'>
                <img src="https://cdn-icons-png.flaticon.com/512/10608/10608872.png" alt="noimage"width={50}  />
            </div>
            <div className='mx-2'>
              <h1>Something here</h1>
            </div>
           
        </div>
        <div className=' text-center p-5 w-48 mx-4  h-36 border rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 ...'>
            <div className='flex items-center justify-center my-3'>
                <img src="https://cdn-icons-png.flaticon.com/512/10608/10608872.png" alt="noimage"width={50}  />
            </div>
            <div className='mx-2'>
              <h1>Something here</h1>
            </div>
           
        </div>
        <div className=' text-center p-5 w-48 mx-4  h-36 border rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 ...'>
            <div className='flex items-center justify-center my-3'>
                <img src="https://cdn-icons-png.flaticon.com/512/10608/10608872.png" alt="noimage"width={50}  />
            </div>
            <div className='mx-2'>
              <h1>Something here</h1>
            </div>
           
        </div>
        <div className=' text-center p-5 w-48 mx-4  h-36 border rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 ...'>
            <div className='flex items-center justify-center my-3'>
                <img src="https://cdn-icons-png.flaticon.com/512/10608/10608872.png" alt="noimage"width={50}  />
            </div>
            <div className='mx-2 '>
              <h1>Something here</h1>
            </div>
           
        </div>
        
        
      </div>
    </>
  );
};

export default SalesGraph;
