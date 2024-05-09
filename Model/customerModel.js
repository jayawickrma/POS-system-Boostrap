export default class customerModel{

        constructor(name, address, nic, phone) {
                this._name = name;
                this._address = address;
                this._nic = nic;
                this._phone = phone;
        }

        get name() {
                return this._name;
        }

        set name(name) {
                this._name = name;
        }

        get address() {
                return this._address;
        }

        set address(address) {
                this._address = address;
        }

        get nic() {
                return this._nic;
        }

        set nic(nic) {
                this._nic = nic;
        }

        get phone() {
                return this._phone;
        }

        set phone(phone) {
                this._phone = phone;
        }


}