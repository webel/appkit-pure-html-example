import { createAppKit } from '@reown/appkit';
import { mainnet, arbitrum } from '@reown/appkit/networks';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

// 1. Get a project ID at https://cloud.reown.com
const projectId = 'eeec4ca4b72fe2ee71eaf9a13c9278b3';

export const networks = [mainnet, arbitrum];

// 2. Set up Wagmi adapter
const wagmiAdapter = new WagmiAdapter({
	projectId,
	networks
});

// 3. Configure the metadata
const metadata = {
	name: 'AppKit',
	description: 'AppKit Example',
	url: 'https://example.com', // origin must match your domain & subdomain
	icons: ['https://avatars.githubusercontent.com/u/179229932']
};

// 3. Create the modal
const modal = createAppKit({
	adapters: [wagmiAdapter],
	networks: [mainnet, arbitrum],
	metadata,
	projectId,
	features: {
		analytics: true // Optional - defaults to your Cloud configuration
	}
});

// 4. Trigger modal programaticaly
const openConnectModalBtn = document.getElementById('open-connect-modal');
const openNetworkModalBtn = document.getElementById('open-network-modal');

openConnectModalBtn.addEventListener('click', () => modal.open());
openNetworkModalBtn.addEventListener('click', () => modal.open({ view: 'Networks' }));

// 5. Alternatively use w3m component buttons within the index.html file
