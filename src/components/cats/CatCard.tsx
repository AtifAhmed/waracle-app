import { Card, CardBody, CardHeader, CardFooter, Tooltip } from "reactstrap";
import { ICat } from "state/action-types";
import { IconFavourite, IconUnFavourite, IconVoteUp, IconVoteDown } from "components/Images";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/reducers";
import { setFavouriteCat, voteForCat, setUnFavouriteCat } from "state/action-creators";
import ToolTip from "components/ToolTip";

const CatCard = (props: { cat: ICat; index: number }) => {
  const favId = `favourite-${props.index}`;
  const unfavId = `unfavourite-${props.index}`;

  const dispatch = useDispatch();

  const votes = useSelector((state: RootState) => state.cats.votes);
  const catVotes = votes.filter((x) => x.image_id === props.cat.id).map((ele) => ele.value);

  const favouriteCatImages = useSelector((state: RootState) => state.cats.favouriteCatImages);

  const calculateScore = (): number => {
    let voteUpCount = 0;
    if (catVotes && catVotes.length > 0) {
      voteUpCount = catVotes?.reduce(function (previousValue, currentValue, currentIndex, array) {
        return previousValue + currentValue;
      });
    }
    let voteDownCount = 0;
    let score = 0;
    if (catVotes?.length > 0) {
      let totalVotes = catVotes.length;
      voteDownCount = totalVotes - voteUpCount;
    }
    score = voteUpCount - voteDownCount;
    return score;
  };

  const favouriteCatId = (): number => {
    const catImage = favouriteCatImages.find((x) => x.imageId === props.cat.id);
    if (catImage) {
      return catImage.favouriteId;
    } else {
      return 0;
    }
  };

  const onSetFavouriteClick = (e: React.MouseEvent, imageId: string) => {
    e.preventDefault();
    dispatch(setFavouriteCat(imageId, true));
  };
  const onSetUnFavouriteClick = (e: React.MouseEvent, favouriteId: number) => {
    e.preventDefault();

    dispatch(setUnFavouriteCat(favouriteId));
  };
  const onVoteClick = (e: React.MouseEvent, imageId: string, value: number) => {
    e.preventDefault();
    if (value == 0 && score <= 0) return;
    dispatch(voteForCat(imageId, value));
  };
  const score = calculateScore();
  const favouriteId = favouriteCatId();

  return (
    <Card className="mr-2">
      <CardHeader className="d-flex justify-content-end">
        {favouriteId > 0 ? (
          <>
            <button onClick={(e) => onSetUnFavouriteClick(e, favouriteId)} className="btn btn-link">
              <IconFavourite id={favId} title="Mark as un favourite" />
            </button>
          </>
        ) : (
          <>
            <button onClick={(e) => onSetFavouriteClick(e, props.cat.id)} className="btn btn-link">
              <IconUnFavourite id={unfavId} title="Mark as favourite " />
            </button>
          </>
        )}
      </CardHeader>
      <CardBody>
        <img src={props.cat.url} alt={props.cat.id} />
      </CardBody>
      <CardFooter className="d-flex justify-content-between">
        <div className="mr-auto">
          <span className="mr-3">{score}</span>
        </div>
        <div>
          <IconVoteUp id={`vote-up-${props.index}`} className="mr-2" onClick={(e) => onVoteClick(e, props.cat.id, 1)} />
          <IconVoteDown className="vote-down" id={`vote-down-${props.index}`} onClick={(e) => onVoteClick(e, props.cat.id, 0)} />
          <ToolTip toolTipText="Vote up" target={`vote-up-${props.index}`} />
          <ToolTip toolTipText="vote down" target={`vote-down-${props.index}`} />
        </div>
      </CardFooter>
    </Card>
  );
};
export default CatCard;
