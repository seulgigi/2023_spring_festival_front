import SearchHeader from "components/booth/SearchHeader";
import { use, useState } from "react";
import { RecommandHeader, RecommandTitle, SearchWrapper } from "./style";
import RecomandRowCard from "components/booth/RecomandRowCard";





function search() {

    // 부스데이터는 list에서 넘겨받음
    const [booth,setBooth] = useState([]);

    const [recomandBooth, setRecomandBooth] = useState([
	{
		id: 1,
		name: "코딩주점",
		type: "야간부스",
		operator: "멋쟁이사자처럼",
		logo_image: "https://www.pngplay.com/wp-content/uploads/3/Apple-Siri-Logo-Download-Free-PNG.png",
		like_cnt: 100,
        start_at: "2023-05-23T18:00:07.687842+09:00",
        end_at: "2023-05-23T23:00:07.687842+09:00",
		location: "학생회관",
		section: "1",
		is_liked: true
	}, 
    {
		id: 2,
		name: "히찬부스",
		type: "야간부스",
		operator: "서희찬",
		logo_image:null,
		like_cnt: 120,
        start_at: "2023-05-23T18:00:07.687842+09:00",
        end_at: "2023-05-23T23:00:07.687842+09:00",
		location: "학생회관",
		section: "2",
		is_liked: true
	}, 
    {
		id: 3,
		name: "집가고싶다..",
		type: "야간부스",
		operator: "멋쟁이사자처럼",
		logo_image: "https://www.pngplay.com/wp-content/uploads/3/Apple-Siri-Logo-Download-Free-PNG.png",
		like_cnt: 100,
        start_at: "2023-05-23T18:00:07.687842+09:00",
        end_at: "2023-05-23T23:00:07.687842+09:00",
		location: "학생회관",
		section: "3",
		is_liked: true
	}, 
    ]);
    
    // 검색어 저장받음 
    const [searchValue, setSearchValue] = useState('');



    // 탑 3 booth 렌더링 함수 
    const renderTopBooth = () => {
        return booth.length === 0 ? (
        <>
        <RecommandHeader>
            <RecommandTitle>실시간 인기 부스</RecommandTitle>

            {/* 추천 행 카드 */}
            {/* 부스 탑 3만큼 뿌려주기 */}
            {recomandBooth.map((booth,idx) => (
                <RecomandRowCard
                ranking = {idx}
                booth={booth.id}
                logoImage = {booth.logo_image}
                boothName = {booth.name} 
                boothOperator = {booth.operator}
                boothLocation = {booth.location}
                likeCnt = {booth.like_cnt}
                is_liked = {booth.is_liked}
                />
            ),)
            }
        </RecommandHeader>
        </>
        ) : (
        <>

        </>    
        );
    }
    
    
      return (
        <>
        {/* 검색 header */}
        <SearchHeader
        searchValue={searchValue}
        setSearchValue={setSearchValue}
            />

        {/* TOP3 부스 렌더링 */}
        {renderTopBooth()}







        </>


    );
}

export default search;