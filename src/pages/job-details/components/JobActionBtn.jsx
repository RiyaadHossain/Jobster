import toast from "react-hot-toast";
import { IoHeartOutline, IoShareSocialOutline } from "react-icons/io5";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import { useApplyMutation } from "../../../redux/api/application";
import { catchAsync } from "../../../helpers/catchAsync";
import {
  useAddMutation,
  useAlreadyAddedQuery,
} from "../../../redux/api/whishlist";

export default function JobActionBtn({ jobId }) {
  const [apply] = useApplyMutation();
  const [addToWishList] = useAddMutation();
  const { data, refetch } = useAlreadyAddedQuery(jobId);

  const onApply = catchAsync(async () => {
    const data = { job: jobId };
    const res = await apply(data).unwrap();
    toast.success(res?.message);
  });

  const handleWishlist = catchAsync(async () => {
    const data = { job: jobId };
    const res = await addToWishList(data).unwrap();
    toast.success(res?.message);
    refetch();
  });

  const alreadyAdded = data?.data;

  return (
    <div>
      <div className="flex items-center gap-5">
        <div
          onClick={handleWishlist}
          className={`border ${
            alreadyAdded && "bg-black text-white"
          } cursor-pointer border-black rounded-full group p-3 hover:bg-black transition-colors`}
        >
          <IoHeartOutline className="text-2xl group-hover:text-white" />
        </div>
        <div className="border cursor-pointer border-black rounded-full group p-3 hover:bg-black transition-colors">
          <IoShareSocialOutline className="text-2xl group-hover:text-white" />
        </div>
        <ButtonPrimary display="Apply" onClickFunc={onApply} />
      </div>
    </div>
  );
}
