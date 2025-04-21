import { cn } from "@/lib/utils";

interface CouponCardProps {
  icon: string;
  title: string;
  amount: number;
  minSpend: number;
  expiryText: string;
}

export function CouponCard({ icon, title, amount, minSpend, expiryText }: CouponCardProps) {
  return (
    <div className="flex bg-white rounded-lg mb-2 overflow-hidden relative">
      {/* Left side with icon */}
      <div className="w-[100px] h-[100px] flex items-center justify-center p-2">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>
      
      {/* Dotted line separator */}
      <div className="absolute h-full left-[100px] border-l border-dashed border-gray-300"></div>
      
      {/* Orange dots on the dotted line */}
      <div className="absolute left-[100px] top-0 w-3 h-3 bg-orange-500 rounded-full -translate-x-1.5 -translate-y-1.5"></div>
      <div className="absolute left-[100px] bottom-0 w-3 h-3 bg-orange-500 rounded-full -translate-x-1.5 translate-y-1.5"></div>
      
      {/* Right side with details */}
      <div className="flex-1 pl-4 pr-2 py-3 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="text-base font-medium">{title}</span>
          <span className="text-gray-400 text-sm">{expiryText}</span>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-baseline">
            <span className="text-red-500 text-sm">¥</span>
            <span className="text-red-500 text-4xl font-bold">{amount}</span>
            <span className="text-gray-500 text-sm ml-1">满{minSpend}元可用</span>
          </div>
          
          <button className="bg-red-500 text-white px-4 py-2 rounded-md text-base">
            去使用
          </button>
        </div>
      </div>
    </div>
  );
}