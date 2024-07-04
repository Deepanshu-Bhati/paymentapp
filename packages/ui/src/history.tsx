export const History = ({ children,balance }: { children: React.ReactNode,balance:number}) => {
  const date=new Date();
  
  return (
    <div>

    <div className="text-xl border-b  flex w-full justify-between mt-2">
      <div className="font-serif">
        Balance
      </div>
      <div className="text-xl font-light">
        ${balance}
      </div>
    </div>
    </div>
  );
};
