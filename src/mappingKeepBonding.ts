import {
  KeepBonding,
  BondCreated,
  BondReassigned,
  BondReleased,
  BondSeized,
  UnbondedValueDeposited,
  UnbondedValueWithdrawn
} from "../generated/KeepBonding/KeepBonding"

import { toDecimal } from "./decimalUtils";
import { BIGDECIMAL_ZERO, BIGINT_ZERO } from "./constants";
import {getOrCreateKeepMember} from "./helpers";
import { log } from "@graphprotocol/graph-ts";

// - contract.authorizerOf(...)
// - contract.availableUnbondedValue(...)
// - contract.beneficiaryOf(...)
// - contract.bondAmount(...)
// - contract.hasSecondaryAuthorization(...)
// - contract.isAuthorizedForOperator(...)
// - contract.unbondedValue(...)

export function handleBondCreated(event: BondCreated): void {
  // let totalBonded = getOrCreateTotalBondedECDSAKeep();
  // totalBonded.totalAvailable  = totalBonded.totalAvailable.minus(toDecimal(event.params.amount));
  // totalBonded.totalBonded  = totalBonded.totalBonded.plus(toDecimal(event.params.amount));
  // totalBonded.save()

  // let contract = KeepBonding.bind(event.address);
  // let idKeepbonding = event.params.holder.toHex();
  // let keepBonding = getOrCreateKeepBonding(idKeepbonding);
  // keepBonding.holder =event.params.holder;
  // keepBonding.referenceID = event.params.referenceID;
  // keepBonding.sortitionPool = event.params.sortitionPool;
  // keepBonding.bondedECDSAKeep =event.params.holder.toHex();
  // keepBonding.save()

  let operator = getOrCreateKeepMember(event.params.operator);
  // let keeps = operator.keeps;
  // keeps.push(keepBonding.id);
  // operator.keeps = keeps;

  operator.unboundAvailable = operator.unboundAvailable.minus(toDecimal(event.params.amount));
  operator.bonded = operator.bonded.plus(toDecimal(event.params.amount));
  operator.save()
}

export function handleBondReassigned(event: BondReassigned): void {
}

export function handleBondReleased(event: BondReleased): void {
  let operator = getOrCreateKeepMember(event.params.operator);

  // let totalBonded = getOrCreateTotalBondedECDSAKeep();
  // totalBonded.totalAvailable  = totalBonded.totalAvailable.plus(operator.bonded);
  // totalBonded.totalBonded = totalBonded.totalBonded.minus(operator.bonded);
  // totalBonded.save()

  operator.unboundAvailable = operator.unboundAvailable.plus(operator.bonded);
  operator.bonded =  operator.bonded.minus(toDecimal(event.params.amount));
  operator.save()
}

export function handleBondSeized(event: BondSeized): void {
  let operator = getOrCreateKeepMember(event.params.operator);
  // operator.destination = event.params.destination;
  // operator.seizeAmount = toDecimal(event.params.amount);
  operator.bonded = operator.bonded.minus(toDecimal(event.params.amount));
  operator.save()

  // let totalBonded = getOrCreateTotalBondedECDSAKeep();
  // totalBonded.totalBonded = totalBonded.totalBonded.minus(toDecimal(event.params.amount));
  // totalBonded.save()
}

export function handleUnbondedValueDeposited(
    event: UnbondedValueDeposited
): void {
  // let totalBonded = getOrCreateTotalBondedECDSAKeep();
  // totalBonded.totalAvailable  = totalBonded.totalAvailable.plus(toDecimal(event.params.amount));
  // totalBonded.save()

  let operator = getOrCreateKeepMember(event.params.operator);
  operator.unboundAvailable = operator.unboundAvailable.plus(toDecimal(event.params.amount));
  operator.save()
}

export function handleUnbondedValueWithdrawn(
    event: UnbondedValueWithdrawn
): void {
  // let totalBonded = getOrCreateTotalBondedECDSAKeep();
  // totalBonded.totalAvailable  = totalBonded.totalAvailable.minus(toDecimal(event.params.amount));
  // totalBonded.save()

  let operator = getOrCreateKeepMember(event.params.operator);
  operator.unboundAvailable = operator.unboundAvailable.minus(toDecimal(event.params.amount));
  operator.save()
}