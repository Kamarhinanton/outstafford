import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import Matter, {
  Engine,
  Render,
  World,
  Bodies,
  Body,
  MouseConstraint,
  Mouse,
  Composite,
  Runner,
} from 'matter-js'

import styles from './OurBlog.module.scss'
const OurBlog = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasParent = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvasWidth = canvasParent.current?.offsetWidth || 800
    const canvasHeight = canvasParent.current?.offsetHeight || 800
    const engine = Engine.create()
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        wireframes: false,
        width: canvasWidth,
        height: canvasHeight,
        background: 'transparent',
      },
    })

    const groundBottom = Bodies.rectangle(
      canvasWidth / 2,
      -50,
      canvasWidth,
      100,
      {
        isStatic: true,
        render: {
          visible: false,
        },
      },
    )
    const groundTop = Bodies.rectangle(
      canvasWidth / 2,
      canvasHeight + 50,
      canvasWidth,
      100,
      {
        isStatic: true,
        render: {
          visible: false,
        },
      },
    )
    const groundRight = Bodies.rectangle(
      canvasWidth + 50,
      canvasHeight / 2,
      100,
      canvasHeight,
      {
        isStatic: true,
        render: {
          visible: false,
        },
      },
    )
    const groundLeft = Bodies.rectangle(
      -50,
      canvasHeight / 2,
      100,
      canvasHeight,
      {
        isStatic: true,
        render: {
          visible: false,
        },
      },
    )
    const dating = Bodies.rectangle(100, 0, 85, 40, {
      chamfer: { radius: 20 },
      render: {
        sprite: {
          texture: '/images/Home/blogTopics/dating.png',
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    })
    const ecommerce = Bodies.rectangle(100, 0, 125, 40, {
      chamfer: { radius: 20 },
      render: {
        sprite: {
          texture: '/images/Home/blogTopics/ecom.png',
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    })
    const fin = Bodies.rectangle(200, 0, 90, 40, {
      chamfer: { radius: 20 },
      render: {
        sprite: {
          texture: '/images/Home/blogTopics/fin.png',
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    })

    Composite.add(engine.world, [
      dating,
      ecommerce,
      fin,
      groundTop,
      groundBottom,
      groundRight,
      groundLeft,
    ])

    Render.run(render)

    const runner = Runner.create()

    Runner.run(runner, engine)

    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      })

    Composite.add(engine.world, mouseConstraint)

    render.mouse = mouse
  }, [])

  return (
    <section className={styles['our-blog']}>
      <h3 className={classNames(styles['title'], 'h3')}>Our blog</h3>
      <div
        ref={canvasParent}
        className={classNames('swiper-no-swiping', styles['our-blog__canvas'])}
      >
        <canvas ref={canvasRef}></canvas>
      </div>
    </section>
  )
}

export default OurBlog
