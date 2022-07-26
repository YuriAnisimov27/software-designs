export interface IAddress {
	street: string;
	city: string;
	state: string;
}

const getFullAddress = (address: IAddress): string => {
	return `${address.street} ${address.city}, ${address.state}`;
};

export interface IClient {
	shipmentId: string;
	weight: number;
	fromAddress: ReturnType<typeof getFullAddress>;
	fromZipCode: string;
	toAddress: ReturnType<typeof getFullAddress>;
	toZipCode: string;
}

export class Client implements IClient {
	public static instance: Client;

	public shipmentId: string;
	public weight: number;
	public fromAddress: ReturnType<typeof getFullAddress>;
	public fromZipCode: string;
	public toAddress: ReturnType<typeof getFullAddress>;
	public toZipCode: string;

	private constructor() {}

	public static getInstance(): Client {
		if (!Client.instance) {
			Client.instance = new Client();
		}
		return Client.instance;
	}

	public getShipmentId(): string {
		return this.shipmentId;
	}

	public cost(): number {
		return this.weight * 0.39;
	}

	public ship(): string {
		const msg = `Shipment ${this.shipmentId}, the item from: ${
			this.fromAddress
		} to: ${this.toAddress}. it will cost: ${this.cost()}`;

		console.log(msg);
		return msg;
	}
}
