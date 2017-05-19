precision highp float;

varying vec4 vColor;
varying vec2 vScreenUV;

uniform sampler2D colorMap;

vec3 blendOverlay(vec3 base, vec3 blend) {
    return mix(1.0 - 2.0 * (1.0 - base) * (1.0 - blend), 2.0 * base * blend, step(base, vec3(0.5)));
}

void main(void) {
	if(distance(gl_PointCoord, vec2(.5)) > .5) discard;

	vec4 color = vColor;

	vec3 colorMap = texture2D(colorMap, vScreenUV).rgb;
	color.rgb = blendOverlay(color.rgb, colorMap);

    gl_FragColor = color;
}