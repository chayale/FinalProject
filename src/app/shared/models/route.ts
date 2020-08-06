import { AreaRange } from './area-range';
import { TimeRange } from './time-range';
import { WalkingBy } from './walking-by';
import { ChoosenBusiness } from './choosen-business';

export class Route{

    areaRange:AreaRange
    timeRange:TimeRange
    walkingBy:WalkingBy
    businessList:ChoosenBusiness[]

}