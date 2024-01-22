import DotBadge from "@/components/ui/DotBadge";
import { useGetTypeSpecifiJobsQuery } from "../../../redux/api/jobApi";
import { userFormatText } from "../../../utils/userFormatText";
import { onSetFilterValue } from "../utils/onSetFilterValue";

export default function SidebarFilter({ props }) {
  const { workLevel, setWorkLevel, employmentType, setEmployemploymentType } =
    props;

  const { data } = useGetTypeSpecifiJobsQuery();
  const typeSpecificJobs = data?.data;

  const onSetWorkLevel = (level) =>
    onSetFilterValue({
      values: workLevel,
      setValues: setWorkLevel,
      newValue: level,
    });

  const onSetEmploymentType = (type) =>
    onSetFilterValue({
      values: employmentType,
      setValues: setEmployemploymentType,
      newValue: type,
    });

  return (
    <div className="bg-primaryLight mt-10 p-6 rounded-xl">
      <div>
        <h3 className="text-lg font-semibold mb-5">Type of Employment</h3>
        <div className="flex flex-col gap-4">
          {typeSpecificJobs?.employmentType?.map((item) => (
            <div key={item?.type} className="flex justify-between items-center">
              <label htmlFor={item?.type} className="cursor-pointer">
                <span className="flex items-center gap-2 font-light">
                  <input
                    onClick={() => onSetEmploymentType(item?.type)}
                    type="checkbox"
                    id={item?.type}
                  />
                  {userFormatText(item?.type)}
                </span>
              </label>
              <DotBadge>{item?.jobs}</DotBadge>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-5 mt-10">Experience Level</h3>
        <div className="flex flex-col gap-4">
          {typeSpecificJobs?.workLevel?.map((item) => (
            <div key={item?.type} className="flex justify-between items-center">
              <label htmlFor={item?.type} className="cursor-pointer">
                <span className="flex items-center gap-2 font-light">
                  <input
                    onClick={() => onSetWorkLevel(item?.type)}
                    type="checkbox"
                    id={item?.type}
                  />
                  {userFormatText(item?.type, { hiphens: true })}
                </span>
              </label>
              <DotBadge>{item?.jobs}</DotBadge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
