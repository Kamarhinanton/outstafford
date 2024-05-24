uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
  float distort = 2.0 * vDisplacement * u_intensity;

  vec3 greenColor = vec3(0.458, 0.984, 0.380);
  vec3 blackColor = vec3(0.0, 0.0, 0.0);

  vec3 color = mix( blackColor, greenColor, distort);

  gl_FragColor = vec4(color , 1.0);
}
