export const Status = ({Status,date,balance}:any) => {
  return (
    
    <div className="flex justify-between p-2">
      <div>
        <h1 className="font-medium">
          {Status}
        </h1>
        {date}
      </div>
      
      <div>+${balance}</div>
    </div>
  );
};
