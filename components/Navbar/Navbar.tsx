import Link from "next/link";
import styles from "./navbar.module.scss";
import Image from "next/image";
import spotifyLogo from "../../public/spotify.svg";
import homeLogo from "../../public/home.svg";
import searchLogo from "../../public/search-interface-symbol.svg";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoSpotify}>
        <Link href="#" className={styles.linkLogo}>
          <Image
            src={spotifyLogo}
            width={35}
            height={35}
            alt="Spotify"
            className={styles.svgLogo}
          />
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.center}>
          <button className={styles.buttonHome}>
            <span className={styles.spanButton}>
              <Image
                src={homeLogo}
                alt="Home"
                width={30}
                height={30}
                className={styles.svgLogoHome}
              />
            </span>
          </button>
          <span className={styles.spanSearchBar}>
            <div className={styles.searchBar}>
              <form className={styles.form}>
                <div className={styles.inputContainer}>
                  <div className={styles.iconSearch}>
                    <Image
                      src={searchLogo}
                      alt="Search"
                      width={30}
                      height={30}
                      className={styles.svgLogoSearch}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="What do you want to play?"
                      className={styles.fieldSearch}
                    />
                  </div>
                  <div className={styles.iconBrowser}>
                    <div className={styles.iconWrapper}></div>
                  </div>
                </div>
              </form>
            </div>
          </span>
        </div>
      </div>
      <div className={styles.containerInstallApp}>
        <button className={styles.buttonExplore}></button>
        <Link href="#" className={styles.linkInstallApp}></Link>
      </div>
    </div>
  );
}
