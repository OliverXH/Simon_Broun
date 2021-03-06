export default "
	#define GLSLIFY 1\n
	uniform float uTime;\n
	uniform float uBorderAlpha;\n
	uniform float uStrikeAlpha;\n\n
	
	varying vec3 vPosition;\n
	varying vec3 vModelPosition;\n
	varying vec2 vUv;\n\n
	
	void main()\n
	{\n
		float uStrikeWidth = 0.5;\n
		// float uStrikeAlpha = 0.25;\n
		float uBorderWidth = 0.1;\n
		// float uBorderAlpha = 0.5;\n\n

		if(vModelPosition.z < 0.0)\n
		{\n        
			discard;\n
		}\n\n    
		
		float strikeStrength = mod((vPosition.x + vPosition.y - uTime * 0.00035 + vPosition.z) / uStrikeWidth * 0.5, 1.0);\n
		strikeStrength = step(strikeStrength, 0.5) * uStrikeAlpha;\n\n

		float borderStrength = max(step(1.0 - vUv.y, uBorderWidth), step(vUv.y, uBorderWidth)) * uBorderAlpha;\n\n

		float alpha = max(strikeStrength, borderStrength);\n\n

		gl_FragColor = vec4(vec3(1.0), alpha);\n\n

		// gl_FragColor = vec4(vUv, 1.0, 1.0);\n
	}\n
";