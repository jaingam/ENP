import Image from "next/image";
import HomePropertyCard from "./components/HomePropertyCard";
import Icon from "./components/Icon";
import CarouselBannerCard from "./components/CarouselBannerCard";
import Category, { CATEGORY } from "./classes/category";
import Link from "next/link";
import BottomBar from "./components/BottomBar";
const ACC = {
  BED: { imgSrc: "https://img.icons8.com/?size=100&id=EdB0alS2o0o4&format=png&color=000000", alt: "bed" },
  SHOWER: { imgSrc: "https://img.icons8.com/?size=100&id=5JWHcGKlaKqM&format=png&color=000000", alt: "Shower" },
  WIFI: { imgSrc: "https://img.icons8.com/?size=100&id=PLlw4LevCJrl&format=png&color=000000", alt: "Wi-Fi" },
  TV: { imgSrc: "https://img.icons8.com/?size=100&id=KXANwimuIGjv&format=png&color=000000", alt: "TV" }
};


export default function Home() {
  const properties =
    [{
      id: "1",
      name: "Apartment Kun Pa",
      imageSrc: "https://s3-alpha-sig.figma.com/img/bcf6/5b84/37e567094f20013bdd10482cc609cfd8?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nKgPlGtrjospJOmUaZfte29jzxWn2bBlvPpTCQeOif1HQep6PqK7LVlzURRuQ3K88rnNyEaCesNB32T9wU8jhkj~xQ~R~2hXPCy8Bx-MV3hJkiGC0SBQauiB0xgheXsHdUirkvYD1ZUMNCT64rG9vNu62t-TFT48Wvso1R0kadvwC-TV-JjurHEFirYHdiED542TQJOwJMqoPOopZixM0nueUKZccQ3sFv89OAV~AVxAqH14mO4r0ajTh-P3vspIXOe21wvAGNaByv4DWrtJKZkBolbSFaK5f8pzBKHvwxXdYWUrBjBXWp0nmw6ttd56~UY2q-o5cvTzBxJUVMdY2A__",
      category: CATEGORY.get("APARTMENT"),
      location: "Sukumvit 39",
      distance: "0.5 km",
      rating: 4.9,
      monthlyRent: 5000,
      accommodities: [ACC.BED, ACC.SHOWER, ACC.WIFI, ACC.TV]
    },
    {
      id: "2",
      name: "Apartment Kun Lung",
      imageSrc: "https://s3-alpha-sig.figma.com/img/467b/7486/58f5f0a2ba6ef26c43b5c0ba09754554?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W376rs~rl0rAtdljQmzGXeRjL-l-WwfwNY-zrAKIIud-ZclD45ccKbpnWZ6-z5RBM7ami5Kjt-DSjg8ABoprh-bbV~3QND9gQUX4IOKUlJVgtXnzfZT6Wj607wBvEK24P9DXvpgBqRv7Y9yh1meczTDAUy1AjuB17rlrB~MGcQybxM9eeStXd-C7QHlKVHOwJQ3rCKNeCUoeEYhV2RusnGHDJI1~tbr0wKjj2ig8xYcAQPYY5winJpcveh3~hv34ckGRKSWktkv8JM3sG7DRwSgsmIT3hD85qfxJFKl-R4oEi08j2h9o-y1PJ86cewSK7yMVmQHUi1iJYzX86aBZKA__",
      category: CATEGORY.get("APARTMENT"),
      location: "Sukumvit 39",
      distance: "0.5 km",
      rating: 4.2,
      monthlyRent: 4600,
      accommodities: [ACC.BED, ACC.SHOWER, ACC.WIFI]
    },
    {
      id: "3",
      name: "Apartment Kun Na",
      imageSrc: "https://s3-alpha-sig.figma.com/img/a7c9/e1ba/23ee01057e7862235b0e857b55c66e89?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=da5XxBAF6ObfuqhcVYvoBA6KIwIfXLQ22F5oyyQjaLivDBKLwU7t1ahMX1JeW~f-DuiboYsVffyEizhO~ohJxw9-pthWLlUyVp3DIHjvZBZU9MDoQATR4rRjZbW4QGpoXdFpV3lbZXagJZGC8zDs3w-0YCG3gx0xGltyZGfc6x7ODzUD66PdwvjsKm~FGgm5Zw0fosFKTriFhaGDLMf0VGqpOUr4UXni79m51eUzGw-KlzuajxCy1OwLbX-0vQuskx8ocbHHzpXIpadJ3zzeuxNoJ7p6RrFwU4z-aH~B8G9W7ZLt4ujujIqTymIzxNFLnRHEfS5j5JaMMAjHyuOAoQ__",
      category: CATEGORY.get("APARTMENT"),
      location: "Sukumvit 39",
      distance: "0.5 km",
      rating: 4.2,
      monthlyRent: 6600,
      accommodities: [ACC.BED, ACC.SHOWER, ACC.WIFI]
    },
    {
      id: "4",
      name: "ABC Dormitory",
      imageSrc: "https://s3-alpha-sig.figma.com/img/a7c9/e1ba/23ee01057e7862235b0e857b55c66e89?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=da5XxBAF6ObfuqhcVYvoBA6KIwIfXLQ22F5oyyQjaLivDBKLwU7t1ahMX1JeW~f-DuiboYsVffyEizhO~ohJxw9-pthWLlUyVp3DIHjvZBZU9MDoQATR4rRjZbW4QGpoXdFpV3lbZXagJZGC8zDs3w-0YCG3gx0xGltyZGfc6x7ODzUD66PdwvjsKm~FGgm5Zw0fosFKTriFhaGDLMf0VGqpOUr4UXni79m51eUzGw-KlzuajxCy1OwLbX-0vQuskx8ocbHHzpXIpadJ3zzeuxNoJ7p6RrFwU4z-aH~B8G9W7ZLt4ujujIqTymIzxNFLnRHEfS5j5JaMMAjHyuOAoQ__",
      category: CATEGORY.get("DORM"),
      location: "Sukumvit 39",
      distance: "0.5 km",
      rating: 4.0,
      monthlyRent: 3000,
      accommodities: [ACC.BED, ACC.SHOWER, ACC.WIFI]
    }];
  const trending = [];
  return (
    <div className=" w-[393px] bg-white">
      <main className="body scroll-m-28">
        <div className="h-[184px] w-full bg-custom-blue items-center rounded-b-[20px] font-bold text-2xl">
          <div className="status pt-[77px] px-7">
            <div className="flex flex-row items-end justify-between text-white font-bold text-2xl">
              <div className="flex flex-col">
                Morning, Yuki
                <div className="font-normal text-sm">
                  Location : Sukumvit 39
                </div>
              </div>
              <div className="flex flex-row  items-center justify-between">
                <Icon src="https://img.icons8.com/?size=100&id=62atSgaif9UE&format=png&color=FFFFFF" alt="Notifications" size={8} />

                <div className=" w-3" />
                <div className="relative
               w-14 h-14 rounded-full border border-white">
                  <Image fill alt="Profile" src={"https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=FFFFFF"} />
                </div>


              </div>
            </div>
          </div>
          <div className="relative bottom-[-17px] flex flex-row gap-x-[12px] place-content-center self-center">
          <input type="text" className="h-[44px] w-[277px] border rounded-full bg-white border-custom-blue drop-shadow-md px-4 py-3 font-normal text-sm" placeholder="Discover what you want?"/>

            <div className=" h-[44px] w-[44px] border rounded-[10px] bg-white border-custom-blue drop-shadow-md">

              <div className=" h-8 w-8 p-[6px]">
                <Icon
                  size={8}
                  src={"https://img.icons8.com/?size=100&id=24238&format=png&color=91d3d6"}
                />

              </div>
            </div>
          </div>
        </div>
        <div className="scroll-m-28">
        <div className="h-[46px]" />
        <div className="carousel-banner px-[26px] flex flex-row transition-all duration-300 gap-x-[76px] scroll-mx-[26px] overflow-x-scroll will-change-scroll no-scrollbar snap-x">
          <CarouselBannerCard
            imgSrc="https://s3-alpha-sig.figma.com/img/8799/1d14/ebde2fa71c5dedabb7d088409c9ddc54?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p6uTu1jwZ4geiFytdxBjTEUwHahRHAni120sTZYQHs0lYYGIlufVpmh9pJGm2nJZnDpr26ffTIQ-yJxJFXQ9rA6AJ-w4N9J99CRjDUTWkxxF548Ufh2LqXRMwVTOGdChXE~dV-uQ1Asb8e8tyi8MrpxyAR6fQV7kBPhTXRshmuy9b-1sHzNMuA7JobUbNB710j0tCk3-H7lbCGuqIT~f8LJ-R~JLF1xyfst2PeYohV333-GSmnCamdx7ll1XnhV-rdkBP2vi7llACIEOGXauK4gbZNJzrMjel49WS-lrOfFvHDn2uCghh1vvSYP2n7tBmLa5d87x3NR1ziloIh7xog__"
            alt="Pet-Friendly Condo"
          />
          <CarouselBannerCard
            imgSrc="https://s3-alpha-sig.figma.com/img/1edb/67ca/1eecbea313cfac9448298d5c4c47a689?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Nj4o74OoeVuy~1wdrf2kFdNLfQA5RBX7NlvfqsvsMJIwdt6irY4EJG7wxFDFC1sApgpJfVypmUP~P-0qezJAkQk9eZzkvbTZz1q5vT4IY~enhk5CKVfi5010jQKZddzfcVtuq3WtA0UyB996gSCEBsMs-ECGP7W3fOnRMp9yQtM7c~1ISqFA6R6a4X0c0Auml46pjdRP6HqFDXX7I5DaNlcD-jLZHT3SqgvBrVUSwvJB9HAj3sX374SD56bmvfdt4e4S~3C0zA3oY8MBRzCVvsn9OjuQb3h9ga6TnaHFRbYU-nKWwRoTWNnAiXYedbV1Y6GoIgpj5XPpjsam17Rtdw__"
            alt="Get ฿500 Off For New User"
          />
          <CarouselBannerCard
            imgSrc="https://s3-alpha-sig.figma.com/img/9c20/a10f/39e67fad31cff7fcbd6f6177f36218a9?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pL5cRpGX~LKqjOLq3QLmbni9wbJLdlfXg1SgPce3lKh2B2M~CyUT5IZC5bblRIwM90yPs4bzNj8CXKTEdWmyztReqa3eCm98K0rnA0jcwZn6y5UXlz-WakudukFamfxPHPauVoI-nEIPckV~zIRitLGjPpmJ~E0GXizHK7FhK0SDMkv~pbWYvT17cE4PVIVmKmg0BUHkBIHweTVl~jPSNPgTZfOsrYnOBl7~uVf2IDWwZKuYO3a8dWhp10gwvuc5VuSq9DSBDlQ3NmhdX~6AZFc80bxLWOgWuhkT0tFSeMvr8ZTCD89AEMc1~faRTSW29AGkuUiGO64mMhE8Hnclow__"
            alt="Cleaning Service"
          />
          <CarouselBannerCard
            imgSrc="https://s3-alpha-sig.figma.com/img/cb0e/fe5b/e3ebf161a0983be8e878d7c7056d97d2?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DDwlbHi5lzBrR8zyLoGN2uV0MmN7WJUt940eKSE27xIOLGszV8bOQ7a~wRob2b8Z5vP6xIZSnAim5LVtQWapkDWBjDpbNJ0n2zWlgiDiYj-2VS2uRSK2NxGeG~wqKPbGkNWYa6WpKgG6B7XloE8GurP8qJvqQTpU~zEJ~6QnMZO0k0UuT0Av6HYhKw7Bav9~V2O8d6E3OCPDfQDRdch5ECf7zG7SLujDSRV~lO2darANVvUZ3UZ7ku~3-417m5DhxSlkgG2PZbYwnbvYJd1r4bMWpI8bPbe6JwsfIY28c1wXQUGptGJJ83Z75xw1qcorvkjWIPiiTAUgQhGn9REQ7A__"
            alt="5 Things to know Before Moving In"
          />
        </div>
        <div className="h-[22px]" />
        <div className="category-section pl-9 pr-6">
          <div className="flex flex-row w-full pr-2 justify-between font-bold text-xl text-[#333333]">
            Category
            <Link href="/explore" className=" font-normal text-sm">see all</Link>
          </div>
          <div className="h-[15px]" />
          <div className=" h-[69px] w-[351px] flex flex-row gap-x-[15px]">
            {
              Array.from(CATEGORY.values(), ((category, key) =>
              (
                <div className="flex flex-col items-center" key={category.name}>
                  <div className=" h-[55px] w-[55px] border rounded-[20px] bg-white border-custom-blue">
                    <div className=" h-8 w-8 p-[11.5px]">
                      <Icon
                        size={8}
                        alt={category.name}
                        src={category.customColor("777777")}
                      />
                    </div>
                  </div>
                  <div className="font-normal text-xs text-[#777777]">
                    {category.name}
                  </div>
                </div>
              )))
            }
          </div>
        </div>
        <div className="h-[36px]" />
        <div className="nearby-section pl-[26px] pr-[17px]">
          <div className="flex flex-row w-full pl-[10px] pr-2 justify-between font-bold text-xl text-[#333333]">
            Nearby
            <Link href="/explore" className=" font-normal text-sm">see all</Link>
          </div>
          <div className="h-[15px]" />
          <div className="no-scrollbar h-[248px] w-[351px] flex flex-row gap-x-4 overflow-x-scroll will-change-scroll">
            {properties.map((property, i) => (

              <HomePropertyCard
                key={property.id}
                name={property.name}
                category={property.category}
                imageSrc={property.imageSrc} location={property.location}
                rating={property.rating}
                distance={property.distance}
                monthlyRent={property.monthlyRent}
                accommodities={property.accommodities} />
            ))}

          </div>

        </div>
        <div className="h-[44px]" />
        <div className="trending-section pl-[26px] pr-[17px]">
          <div className="flex flex-row w-full pl-[10px] pr-2 justify-between font-bold text-xl text-[#333333]">
            Trending rooms available!
            <Link href="/explore" className=" font-normal text-sm">see all</Link>
          </div>
          <div className="h-[15px]" />
          <div className="no-scrollbar h-[248px] w-[351px] flex flex-row gap-x-4 overflow-x-scroll will-change-scroll">
            {properties.map((property, i) => (

              <HomePropertyCard
                key={property.id}
                name={property.name}
                category={property.category}
                imageSrc={property.imageSrc} location={property.location}
                rating={property.rating}
                distance={property.distance}
                monthlyRent={property.monthlyRent}
                accommodities={property.accommodities} />
            ))}

          </div>
        </div>

        </div>
      </main>
   <BottomBar/>
    </div>
  );
}
