import React from "react";
import exampleImage from "../imgs/example_image.jpg";
import img_potatoes from "../imgs/home_potatoes.svg";
import img_home from "../imgs/home.svg";
import img_cloud1 from "../imgs/home_cloud1.svg";
import img_cloud2 from "../imgs/home_cloud2.svg";
import img_potato from "../imgs/potato.svg";
import img_heart from "../imgs/filled_heart.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/hot-spot");
  };

  return (
    <div className="overflow-hidden overflow-x-hidden w-full min-h-screen bg-gradient-to-b from-white via-[#FFFADD] to-[#F8B46E] box-border">
      <img src={img_potatoes} className="h-[20vh] mt-[20vh] mx-auto"></img>
      <div className="h-[20vh] mt-[10vh] mb-[35vh] text-center">
        <div className=" font-bold text-3xl">
          <span>나만의 </span>
          <span className="text-main-green">"</span>
          <span className="text-main-orange">HIDDEN SPOT</span>
          <span className="text-main-green">"</span>
          <span>을 찾다.</span>
        </div>
        <div className="mt-[2vh] mx-auto text-gray-400">
          취향에 맞는 추천 여행지와 여행 스케줄을 PHOTATO해보세요.
        </div>
      </div>
      <img src={img_home} className="h-[185vh] ml-[15vw]"></img>
      <img
        src={img_cloud1}
        className="h-[40vh] absolute top-[125vh] right-0 z-10"
      ></img>
      <img
        src={img_cloud2}
        className="h-[40vh] absolute top-[165vh] left-0 z-10"
      ></img>
      <img
        src={img_cloud1}
        className="h-[45vh] absolute top-[200vh] right-0 z-10"
      ></img>
      <img
        src={img_cloud2}
        className="h-[45vh] absolute top-[260vh] left-0 z-10"
      ></img>
      <img
        src={img_potato}
        className="h-[12vh] absolute top-[129vh] right-[10vw]"
      ></img>
      <img
        src={img_potato}
        className="h-[12vh] absolute top-[163vh] left-[12vw] transform scale-x-[-1]"
      ></img>
      <img
        src={img_potato}
        className="h-[12vh] absolute top-[205vh] right-[14vw]"
      ></img>
      <img
        src={img_potato}
        className="h-[12vh] absolute top-[253vh] left-[3vw] transform scale-x-[-1]"
      ></img>

      <div className="absolute top-[135vh] right-[2vw] w-[35vw] z-50">
        <div className=" font-bold text-3xl text-right">
          <span>STEP 1 사진 선택</span>
        </div>
        <div className="mx-auto text-left">
          1. 사용자는 여행지 선택을 위해 자신의 갤러리에서 여행 관련 사진을
          선택하여 업로드합니다.
          <br />
          2. PHOTATO는 업로드 된 사진의 메타데이터를 분석하여 사진 속에 포함된
          GPS 위치 정보를 추출합니다.
          <br />
          3. GPS 정보가 없는 사진의 경우, 사용자가 수동으로 위치 정보를 입력할
          수 있습니다.
          <br />
          4. 사진에서 추출한 위치 정보를 바탕으로 주변의 인기 관광지를
          추천합니다.{" "}
          <span className="text-main-orange font-bold">(추천순)</span>
          <br />
          5. 가장 많은 사용자에게 좋아요를 받은 순서대로 HOT SPOT을 추천합니다.{" "}
          <span className="text-main-orange font-bold">(인기순)</span>
          <br />
        </div>
      </div>
      <div className="absolute top-[180vh] left-[2vw] w-[40vw] z-50">
        <div className=" font-bold text-3xl text-left">
          <span>STEP 2 여행 기간 설정</span>
        </div>
        <div className="mx-auto text-left">
          1. 추천된 여행지를 기반으로 여행 일정을 계획하기 위해 여행 기간을
          설정합니다.
          <br />
          2. 사용자는 여행 시작 날짜와 종료 날짜를 선택하여 전체 여행 기간을
          설정합니다.
          <br />
          3. 설정된 여행 기간은 이후 숙소 및 맛집 선택, 이동 경로 안내 등 여행
          계획의 기반이 됩니다.
        </div>
      </div>
      <div className="absolute top-[215vh] right-[2vw] w-[40vw] z-50">
        <div className=" font-bold text-3xl text-right">
          <span>STEP 3 숙소/맛집 선택</span>
        </div>
        <div className="mx-auto text-left">
          1. PHOTATO는 설정된 여행 기간과 위치 정보를 바탕으로 주변의 숙소와
          맛집을 추천합니다. <br />
          2. 숙소는 VR 또는 360º 동영상으로 실제와 같은 경험을 제공하여 사용자가
          더욱 쉽게 선택할 수 있습니다.
          <br />
          3. 맛집은 사용자 리뷰와 평점을 반영하여 맞춤형으로 추천합니다.
          <br />
          4. 추천된 숙소와 맛집에서 사용자는{" "}
          <img src={img_heart} className="w-7 inline"></img> 버튼을 눌러 마음에
          드는 숙소와 맛집을{" "}
          <span className="text-main-orange font-bold">개인 폴더</span>에 저장할
          수 있습니다.
          <br />
          5.{" "}
          <div className="px-3 py-1 rounded-2xl bg-main-orange inline font-bold">
            선택
          </div>{" "}
          버튼을 눌러 선택한 숙소와 맛집을{" "}
          <span className="text-main-orange font-bold">여행 스케줄</span>에
          포함시킬 수 있습니다.
        </div>
      </div>
      <div className="absolute top-[275vh] left-[2vw] w-[40vw] z-50">
        <div className=" font-bold text-3xl text-left">
          <span>STEP 4 이동 경로 안내</span>
        </div>
        <div className="mx-auto text-left">
          1. PHOTATO는 사용자가 선택한 숙소, 맛집, 관광지를 바탕으로 최적의 이동
          경로를 안내합니다.
          <br />
          2. 이동 경로는 시간 효율성과 편의성을 고려하여 설계되며, 사용자에게
          다양한 교통 수단 정보를 제공합니다.
          <br />
          3. 사용자는{" "}
          <div className="px-3 py-1 rounded-2xl bg-main-orange inline font-bold">
            다시 생성하기
          </div>
          버튼을 눌러 새로운 경로를 제공 받을 수 있습니다.
          <br />
          4. 여행 스케줄에 포함된 장소들을 지도 상에서 확인할 수 있으며, 이동
          경로를 따라 계획된 일정을 쉽게 파악할 수 있습니다.
          <br />
          5. 사용자는 여행 중 언제든지 경로를 수정하거나 삭제할 수 있습니다.
          <br />
          6.{" "}
          <div className="px-4 py-1 rounded-2xl bg-black text-white inline">
            save
          </div>{" "}
          버튼을 누르면 [마이페이지->저장한 스케줄] 에서 확인할 수 있습니다.
        </div>
      </div>
      <button
        onClick={handleButtonClick}
        className="absolute top-[285vh] right-[12vw] px-8 py-2 rounded-[50px] bg-[#A9C398] shadow-md shadow-black/30 text-white text-center font-pretendard text-[20px] font-bold leading-normal"
      >
        시작하기
      </button>
      <div className="grid grid-cols-5 grid-rows-2 gap-2.5 p-5 mt-[15vh]">
        {Array.from({ length: 10 }).map((_, index) => (
          <img
            src={exampleImage}
            alt={`Example ${index + 1}`}
            key={index}
            className="w-full h-auto object-cover border border-gray-300 rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
