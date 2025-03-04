import Image from "next/image";

const Portfolio = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <Image 
        src="/profile.jpg" 
        alt="Makafui Quist" 
        width={720} 
        height={776} 
        className="profile-pic" 
      />
    </div>
  );
};

export default Portfolio;