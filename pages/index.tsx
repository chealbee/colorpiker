import Image from "next/image";
import { useEffect, useState } from "react";
import lockImg from "/public/img/icons8-padlock-48.png";
import unlockImg from "/public/img/icons8-padlock-outline-48.png";

const index = () => {
  let [arrELL, setArrELL] = useState([
    { collText: "#00000", isLock: false, id: 1 },
    { collText: "#00000", isLock: false, id: 2 },
    { collText: "#00000", isLock: false, id: 3 },
    { collText: "#00000", isLock: false, id: 4 },
    { collText: "#00000", isLock: false, id: 5 },
    { collText: "#00000", isLock: false, id: 6 },
  ]);

  const genereteRandomeColor = () => {
    const hexCodes = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return "#" + color;
  };

  useEffect(() => {
    const newarr = arrELL.map((ell, indx, arr) => {
      return { ...ell, collText: genereteRandomeColor() };
    });
    setArrELL(newarr);
  }, []);

  const chnageColors = () => {
    const newarr = arrELL.map((ell, indx, arr) => {
      if (ell.isLock) {
        return ell;
      }
      return { ...ell, collText: genereteRandomeColor() };
    });
    setArrELL(newarr);
  };

  const setLock = (id: number) => {
    setArrELL(
      arrELL.map((el) => {
        if (el.id !== id) {
          return el;
        } else {
          return { ...el, isLock: !el.isLock };
        }
      })
    );
  };
  return (
    <div className="wraper" onKeyDown={(e) => console.log(e.code)}>
      {arrELL.map((ell) => {
        return (
          <div
            className="col"
            key={ell.id}
            style={{ background: ell.collText }}
          >
            <h2 data-type="copy">{ell.collText}</h2>
            <button data-type="lock" onClick={() => setLock(ell.id)}>
              {ell.isLock ? (
                <Image src={unlockImg} width={38} height={38} alt={"lock"} />
              ) : (
                <Image src={lockImg} width={38} height={38} alt={"unlock"} />
              )}
            </button>
          </div>
        );
      })}
      <button className="chnageButton" onClick={chnageColors}>
        change colors
      </button>
    </div>
  );
};
export default index;
