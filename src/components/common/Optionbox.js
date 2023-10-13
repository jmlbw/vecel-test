import OptionboxItem from './OptionboxItem';
import { BiSolidUser, BiSolidFolder, BiBuildings } from 'react-icons/bi';
import { AiFillFolder } from 'react-icons/ai';
import React from 'react';

function Optionbox(props) {
  console.log('inidt:', initData);
  let icon = null;
  let initData = props.initData;
  let id = props.id;
  let name =
    initData.name ||
    initData.user ||
    initData.department ||
    initData.establishment ||
    initData.company;
  let category = initData.category;
  let useId =
    initData.useId ||
    initData.userId ||
    initData.deptId ||
    initData.estId ||
    initData.compId;

  if (props.category === 'null') {
  } else if (category === 'U') {
    icon = <BiSolidUser />;
  } else if (category === 'D') {
    icon = <BiSolidFolder />;
  } else if (category === 'C') {
    icon = <BiBuildings />;
  } else if (category === 'E') {
    icon = <AiFillFolder />;
  }

  return (
    <div>
      <OptionboxItem
        icon={icon}
        name={name}
        id={id}
        category={category}
        useId={useId}
        onValueChange={props.dataHandler}
      ></OptionboxItem>
    </div>
  );
}
export default Optionbox;
