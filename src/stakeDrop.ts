import {BigInt, ethereum} from "@graphprotocol/graph-ts/index";
import {StakedropInterval} from "../generated/schema";


// From ECDSARewards.sol
const ECDSAWeights: number[] = [
  4,
  8,
  10,
  12,
  15,
  15,
  15,
  15,
  15,
  15,
  15,
  15,
  15,
  15,
  15,
  15,
  15,
  15,
  15,
  15,
  15,
  15,
  15,
  15
];

let ecdsaFirstIntervalStart = BigInt.fromI32(1600041600);

// In solidity this is 30 days, which seems to be a set number of seconds
const SECONDS_DAY = 24 * 3600;
let termLength = BigInt.fromI32(30 * SECONDS_DAY);

// From BeaconRewards.sol
const BeaconWeights: number[] = [
  4, 8, 10, 12, 15, 15,
  15, 15, 15, 15, 15, 15,
  15, 15, 15, 15, 15, 15,
  15, 15, 15, 15, 15, 15
];

// From BeaconRewards.sol
let beaconFirstIntervalStart = BigInt.fromI32(1600905600);


// Return the interval number the timestamp falls within. Start at index 0. -1 if no interval.
// From: Rewards.sol
function intervalOf(timestamp: BigInt, type: number): i32 {
  let programStart = type == 0 ? beaconFirstIntervalStart : ecdsaFirstIntervalStart;
  let maxIntervals = type == 0 ? BeaconWeights.length : ECDSAWeights.length;

  // Should not happen, but the solidity code counts those for the first interval.
  if (timestamp < programStart) {
    return 0;
  }

  let difference = timestamp.minus(programStart);
  let interval = difference.div(termLength).toI32();
  if (interval >= maxIntervals) {
    return -1;
  }
  return interval;
}


/**
 * The Stakedrop is a program to incentivize the operation of nodes and providing bonding capacity.
 */
export function getOrCreateStakedropInterval(event: ethereum.Event): StakedropInterval|null {
  let idx = intervalOf(event.block.timestamp, 1);
  if (idx == -1) {
    return null;
  }

  let id = 'sti-' + idx.toString();

  let interval = StakedropInterval.load(id);
  if (interval) {
    return interval;
  }
  else {
    interval = new StakedropInterval(id);
    interval.beaconGroupCount = 0;
    interval.keepCount = 0;
    interval.number = idx + 1;
    interval.beaconIntervalStart = beaconFirstIntervalStart.plus(termLength.times(BigInt.fromI32(idx)))
    interval.beaconIntervalEnd = beaconFirstIntervalStart.plus(termLength.times(BigInt.fromI32(idx+1)))
    interval.ecdsaIntervalStart = ecdsaFirstIntervalStart.plus(termLength.times(BigInt.fromI32(idx)))
    interval.ecdsaIntervalEnd = ecdsaFirstIntervalStart.plus(termLength.times(BigInt.fromI32(idx+1)))
    return interval;
  }
}