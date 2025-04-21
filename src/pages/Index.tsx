import { CouponCard } from "@/components/CouponCard";

const Index = () => {
  const coupons = [
    {
      id: 1,
      icon: "/images/vegetable-icon.svg",
      title: "叮咚买菜专属红包",
      amount: 8,
      minSpend: 20,
      expiryText: "1天内到期"
    },
    {
      id: 2,
      icon: "/images/vegetable-icon.svg",
      title: "叮咚买菜专属红包",
      amount: 8,
      minSpend: 20,
      expiryText: "1天内到期"
    },
    {
      id: 3,
      icon: "/images/redpacket-icon.svg",
      title: "零食满减红包",
      amount: 8,
      minSpend: 20,
      expiryText: "1天内到期"
    },
    {
      id: 4,
      icon: "/images/redpacket-icon.svg",
      title: "鲜花专享红包",
      amount: 8,
      minSpend: 20,
      expiryText: "1天内到期"
    }
  ];

  return (
    <div className="min-h-screen bg-orange-500 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-md bg-white/10 rounded-b-3xl px-8 pt-6 pb-12 mb-4">
        <div className="text-center text-white text-2xl font-bold mb-4">淘宝小时达</div>
        <h1 className="text-white text-4xl font-bold text-center mb-2">恭喜你获得下单红包!</h1>
        <p className="text-white text-xl text-center">共获得50元红包 若退款红包会追回</p>
      </div>

      {/* Coupon List */}
      <div className="w-full max-w-md px-4">
        {coupons.map(coupon => (
          <CouponCard 
            key={coupon.id}
            icon={coupon.icon}
            title={coupon.title}
            amount={coupon.amount}
            minSpend={coupon.minSpend}
            expiryText={coupon.expiryText}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;