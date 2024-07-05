// utils/verifyJwt.ts

const encoder = new TextEncoder()
const decoder = new TextDecoder('utf-8')

async function importKey(secret: string) {
	return await crypto.subtle.importKey(
		'raw',
		encoder.encode(secret),
		{name: 'HMAC', hash: 'SHA-256'},
		false,
		['verify']
	)
}

async function verifyJwt(token: string, secret: string) {
	const [header, payload, signature] = token.split('.')
	const data = `${header}.${payload}`
	const key = await importKey(secret)
	const signatureBytes = Uint8Array.from(
		atob(signature.replace(/-/g, '+').replace(/_/g, '/')),
		(c) => c.charCodeAt(0)
	)
	const valid = await crypto.subtle.verify(
		'HMAC',
		key,
		signatureBytes,
		encoder.encode(data)
	)

	if (!valid) {
		throw new Error('Invalid token')
	}

	return JSON.parse(
		decoder.decode(
			Uint8Array.from(atob(payload.replace(/-/g, '+').replace(/_/g, '/')), (c) =>
				c.charCodeAt(0)
			)
		)
	)
}

export default verifyJwt
