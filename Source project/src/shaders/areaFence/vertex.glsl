export default "
	#define GLSLIFY 1\n
	varying vec3 vPosition;\n
	varying vec3 vModelPosition;\n
	varying vec2 vUv;\n\n
	
	void main()\n
	{\n
		vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n
		gl_Position = projectionMatrix * viewMatrix * modelPosition;\n\n

		vPosition = position.xyz;\n
		vModelPosition = modelPosition.xyz;\n
		vUv = uv;\n
	}\n
";