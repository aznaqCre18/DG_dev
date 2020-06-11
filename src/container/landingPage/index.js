import React from "react";

import "./../../style/landingPage/style.scss";
import NavMenu from "./../../component/navbar";
import All from "./../../assets/img-hero.svg";
import Fb from "./../../assets/fb.svg";
import Ig from "./../../assets/ig.svg";

export default function landingPage() {
  return (
    <>
      <NavMenu />
      <div className="img-hero">
        <img src={All} alt="All" />
      </div>

      <div className="greetings">Selamat Datang</div>

      <div className="articles">
        <p>
          Program DIFFICULT GLORY FUTSAL ACADEMY adalah ingin mengembangkan
          keterampilan para pemain FUTSAL yang telah ditanamkan sikap disiplin,
          jujur, dan skill yang mempuni agar menjadi pemain yang mempunyai
          attitude yang baik dan skill yang baik, Sekolah Futsal DIFFICULT GLORY
          FA lahir pada 08 Febuari 2019 . Nama DIFFICULT GLORY FA sendiri
          berarti DIFFICULT ( SULIT ) GLORY (JUARA) banyak orang yang salah
          dalam mengartikan arti nama tersebut, arti nama DIFFICULT GLORY itu
          adalah jika kita melakukan hal apapun harus melewatkan KESULITAN baru
          akan merasakan JUARA. Tempat berlatih kami di LAP. JAWA, BEJI, DEPOK.
        </p>
      </div>

      <div className="join-us">
        <h1>Daftar Sekarang</h1>
        <div className="btn-regis">Klik Disini !</div>
      </div>

      <div className="footer">
        <p>© Difficult Glory 2020 - All Rights Reserved</p>
        <div className="sosmed">
          <ul>
            <li>
              <a href="https://www.instagram.com/difficult_gloryfa/">
                <img src={Ig} />
              </a>
            </li>
            <li>
              <a href="https://web.facebook.com/difficult.glory.71">
                <img src={Fb} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
