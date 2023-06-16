import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-width flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
