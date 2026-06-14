export function createConnection() {
    return {
        connect: ()=> {
            console.log('✅ Connecting...');
        },
        disConnect() {
            console.log('❌ Disconnected.');
        }
    }
}