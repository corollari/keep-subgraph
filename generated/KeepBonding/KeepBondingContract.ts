// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BondCreated extends ethereum.Event {
  get params(): BondCreated__Params {
    return new BondCreated__Params(this);
  }
}

export class BondCreated__Params {
  _event: BondCreated;

  constructor(event: BondCreated) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get holder(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sortitionPool(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get referenceID(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class BondReassigned extends ethereum.Event {
  get params(): BondReassigned__Params {
    return new BondReassigned__Params(this);
  }
}

export class BondReassigned__Params {
  _event: BondReassigned;

  constructor(event: BondReassigned) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get referenceID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newHolder(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get newReferenceID(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class BondReleased extends ethereum.Event {
  get params(): BondReleased__Params {
    return new BondReleased__Params(this);
  }
}

export class BondReleased__Params {
  _event: BondReleased;

  constructor(event: BondReleased) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get referenceID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class BondSeized extends ethereum.Event {
  get params(): BondSeized__Params {
    return new BondSeized__Params(this);
  }
}

export class BondSeized__Params {
  _event: BondSeized;

  constructor(event: BondSeized) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get referenceID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get destination(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class UnbondedValueDeposited extends ethereum.Event {
  get params(): UnbondedValueDeposited__Params {
    return new UnbondedValueDeposited__Params(this);
  }
}

export class UnbondedValueDeposited__Params {
  _event: UnbondedValueDeposited;

  constructor(event: UnbondedValueDeposited) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get beneficiary(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UnbondedValueWithdrawn extends ethereum.Event {
  get params(): UnbondedValueWithdrawn__Params {
    return new UnbondedValueWithdrawn__Params(this);
  }
}

export class UnbondedValueWithdrawn__Params {
  _event: UnbondedValueWithdrawn;

  constructor(event: UnbondedValueWithdrawn) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get beneficiary(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class KeepBondingContract extends ethereum.SmartContract {
  static bind(address: Address): KeepBondingContract {
    return new KeepBondingContract("KeepBondingContract", address);
  }

  authorizerOf(_operator: Address): Address {
    let result = super.call("authorizerOf", "authorizerOf(address):(address)", [
      ethereum.Value.fromAddress(_operator)
    ]);

    return result[0].toAddress();
  }

  try_authorizerOf(_operator: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "authorizerOf",
      "authorizerOf(address):(address)",
      [ethereum.Value.fromAddress(_operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  availableUnbondedValue(
    operator: Address,
    bondCreator: Address,
    authorizedSortitionPool: Address
  ): BigInt {
    let result = super.call(
      "availableUnbondedValue",
      "availableUnbondedValue(address,address,address):(uint256)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(bondCreator),
        ethereum.Value.fromAddress(authorizedSortitionPool)
      ]
    );

    return result[0].toBigInt();
  }

  try_availableUnbondedValue(
    operator: Address,
    bondCreator: Address,
    authorizedSortitionPool: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "availableUnbondedValue",
      "availableUnbondedValue(address,address,address):(uint256)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(bondCreator),
        ethereum.Value.fromAddress(authorizedSortitionPool)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  beneficiaryOf(_operator: Address): Address {
    let result = super.call(
      "beneficiaryOf",
      "beneficiaryOf(address):(address)",
      [ethereum.Value.fromAddress(_operator)]
    );

    return result[0].toAddress();
  }

  try_beneficiaryOf(_operator: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "beneficiaryOf",
      "beneficiaryOf(address):(address)",
      [ethereum.Value.fromAddress(_operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  bondAmount(operator: Address, holder: Address, referenceID: BigInt): BigInt {
    let result = super.call(
      "bondAmount",
      "bondAmount(address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(holder),
        ethereum.Value.fromUnsignedBigInt(referenceID)
      ]
    );

    return result[0].toBigInt();
  }

  try_bondAmount(
    operator: Address,
    holder: Address,
    referenceID: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "bondAmount",
      "bondAmount(address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(holder),
        ethereum.Value.fromUnsignedBigInt(referenceID)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasSecondaryAuthorization(
    _operator: Address,
    _poolAddress: Address
  ): boolean {
    let result = super.call(
      "hasSecondaryAuthorization",
      "hasSecondaryAuthorization(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_operator),
        ethereum.Value.fromAddress(_poolAddress)
      ]
    );

    return result[0].toBoolean();
  }

  try_hasSecondaryAuthorization(
    _operator: Address,
    _poolAddress: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "hasSecondaryAuthorization",
      "hasSecondaryAuthorization(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_operator),
        ethereum.Value.fromAddress(_poolAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isAuthorizedForOperator(
    _operator: Address,
    _operatorContract: Address
  ): boolean {
    let result = super.call(
      "isAuthorizedForOperator",
      "isAuthorizedForOperator(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_operator),
        ethereum.Value.fromAddress(_operatorContract)
      ]
    );

    return result[0].toBoolean();
  }

  try_isAuthorizedForOperator(
    _operator: Address,
    _operatorContract: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isAuthorizedForOperator",
      "isAuthorizedForOperator(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_operator),
        ethereum.Value.fromAddress(_operatorContract)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  unbondedValue(param0: Address): BigInt {
    let result = super.call(
      "unbondedValue",
      "unbondedValue(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_unbondedValue(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "unbondedValue",
      "unbondedValue(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get registryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenStakingAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenGrantAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AuthorizeSortitionPoolContractCall extends ethereum.Call {
  get inputs(): AuthorizeSortitionPoolContractCall__Inputs {
    return new AuthorizeSortitionPoolContractCall__Inputs(this);
  }

  get outputs(): AuthorizeSortitionPoolContractCall__Outputs {
    return new AuthorizeSortitionPoolContractCall__Outputs(this);
  }
}

export class AuthorizeSortitionPoolContractCall__Inputs {
  _call: AuthorizeSortitionPoolContractCall;

  constructor(call: AuthorizeSortitionPoolContractCall) {
    this._call = call;
  }

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _poolAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AuthorizeSortitionPoolContractCall__Outputs {
  _call: AuthorizeSortitionPoolContractCall;

  constructor(call: AuthorizeSortitionPoolContractCall) {
    this._call = call;
  }
}

export class CreateBondCall extends ethereum.Call {
  get inputs(): CreateBondCall__Inputs {
    return new CreateBondCall__Inputs(this);
  }

  get outputs(): CreateBondCall__Outputs {
    return new CreateBondCall__Outputs(this);
  }
}

export class CreateBondCall__Inputs {
  _call: CreateBondCall;

  constructor(call: CreateBondCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get holder(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get referenceID(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get authorizedSortitionPool(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class CreateBondCall__Outputs {
  _call: CreateBondCall;

  constructor(call: CreateBondCall) {
    this._call = call;
  }
}

export class DeauthorizeSortitionPoolContractCall extends ethereum.Call {
  get inputs(): DeauthorizeSortitionPoolContractCall__Inputs {
    return new DeauthorizeSortitionPoolContractCall__Inputs(this);
  }

  get outputs(): DeauthorizeSortitionPoolContractCall__Outputs {
    return new DeauthorizeSortitionPoolContractCall__Outputs(this);
  }
}

export class DeauthorizeSortitionPoolContractCall__Inputs {
  _call: DeauthorizeSortitionPoolContractCall;

  constructor(call: DeauthorizeSortitionPoolContractCall) {
    this._call = call;
  }

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _poolAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class DeauthorizeSortitionPoolContractCall__Outputs {
  _call: DeauthorizeSortitionPoolContractCall;

  constructor(call: DeauthorizeSortitionPoolContractCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class FreeBondCall extends ethereum.Call {
  get inputs(): FreeBondCall__Inputs {
    return new FreeBondCall__Inputs(this);
  }

  get outputs(): FreeBondCall__Outputs {
    return new FreeBondCall__Outputs(this);
  }
}

export class FreeBondCall__Inputs {
  _call: FreeBondCall;

  constructor(call: FreeBondCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get referenceID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class FreeBondCall__Outputs {
  _call: FreeBondCall;

  constructor(call: FreeBondCall) {
    this._call = call;
  }
}

export class ReassignBondCall extends ethereum.Call {
  get inputs(): ReassignBondCall__Inputs {
    return new ReassignBondCall__Inputs(this);
  }

  get outputs(): ReassignBondCall__Outputs {
    return new ReassignBondCall__Outputs(this);
  }
}

export class ReassignBondCall__Inputs {
  _call: ReassignBondCall;

  constructor(call: ReassignBondCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get referenceID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get newHolder(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get newReferenceID(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ReassignBondCall__Outputs {
  _call: ReassignBondCall;

  constructor(call: ReassignBondCall) {
    this._call = call;
  }
}

export class SeizeBondCall extends ethereum.Call {
  get inputs(): SeizeBondCall__Inputs {
    return new SeizeBondCall__Inputs(this);
  }

  get outputs(): SeizeBondCall__Outputs {
    return new SeizeBondCall__Outputs(this);
  }
}

export class SeizeBondCall__Inputs {
  _call: SeizeBondCall;

  constructor(call: SeizeBondCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get referenceID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get destination(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class SeizeBondCall__Outputs {
  _call: SeizeBondCall;

  constructor(call: SeizeBondCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get operator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawAsManagedGranteeCall extends ethereum.Call {
  get inputs(): WithdrawAsManagedGranteeCall__Inputs {
    return new WithdrawAsManagedGranteeCall__Inputs(this);
  }

  get outputs(): WithdrawAsManagedGranteeCall__Outputs {
    return new WithdrawAsManagedGranteeCall__Outputs(this);
  }
}

export class WithdrawAsManagedGranteeCall__Inputs {
  _call: WithdrawAsManagedGranteeCall;

  constructor(call: WithdrawAsManagedGranteeCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get operator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get managedGrant(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class WithdrawAsManagedGranteeCall__Outputs {
  _call: WithdrawAsManagedGranteeCall;

  constructor(call: WithdrawAsManagedGranteeCall) {
    this._call = call;
  }
}
