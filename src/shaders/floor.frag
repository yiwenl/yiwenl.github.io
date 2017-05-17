// copy.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;

void main(void) {

	float d = distance(vTextureCoord, vec2(.5));
	d = smoothstep(0.5, 0.0, d);
	vec4 color = texture2D(texture, vTextureCoord);
	color.rgb = mix(color.rgb, vec3(1.0), .75);
	color.rgb += d * 0.25;

    gl_FragColor = color;
}