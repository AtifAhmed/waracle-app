import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ICat } from "state/action-types";
import { RootState } from "state/reducers";
import CatCard from "./CatCard";
import { Spinner, Alert } from "reactstrap";
import "./style.scss";
import TopNavBar from "../navBar/Index";
import { getUploadedCatImages } from "state/action-creators";
const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUploadedCatImages());
  }, []);

  const state = useSelector((state: RootState) => state.cats);
  const isLoading = useSelector((state: RootState) => state.cats.isLoading);
  const cats = state.cats;
  return (
    <>
      <TopNavBar />
      <div className="cats-wrapper d-flex flex-row flex-wrap">
        {isLoading ? (
          <Spinner size={"md"} className=" spinner" />
        ) : (
          <>
            {cats.length > 0 && cats?.map((cat: ICat, index: number) => <CatCard key={index} cat={cat} index={index} />)}
            {cats.length === 0 && (
              <Alert className="mt-3" color="danger">
                No Images Uploaded
              </Alert>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Index;
