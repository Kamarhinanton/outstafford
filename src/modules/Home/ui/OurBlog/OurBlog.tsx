import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import classNames from 'classnames'
// import useWindowDimensions from '@/hooks/useWindowDimensions'
import {
  Engine,
  Render,
  Bodies,
  MouseConstraint,
  Mouse,
  Composite,
  Runner,
} from 'matter-js'

import styles from './OurBlog.module.scss'
const OurBlog = () => {
  // const width = useWindowDimensions()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasParent = useRef<HTMLDivElement>(null)
  const isInView = useInView(canvasParent, { once: true })
  const [widthCanvas, setWidthCanvas] = useState<number | undefined>(undefined)
  const [heightCanvas, setHeightCanvas] = useState<number | undefined>(
    undefined,
  )
  // const [key, setKey] = useState(0)
  // const [, setViewport] = useState(width)

  const createRectangle = (
    x: number,
    y: number,
    width: number,
    height: number,
    texture: string,
  ) => {
    return Bodies.rectangle(x, y, width, height, {
      chamfer: { radius: 20 },
      render: {
        sprite: {
          texture,
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    })
  }

  const runCanvas = () => {
    if (!canvasRef.current) return
    const canvasWidth = widthCanvas || 600
    const canvasHeight = heightCanvas || 600
    const engine = Engine.create()
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        wireframes: false,
        width: canvasWidth - 1,
        height: canvasHeight - 1,
        pixelRatio: 2,
        background: 'transparent',
      },
    })

    const topics = [
      createRectangle(
        canvasWidth / 2 - 30,
        0,
        85,
        40,
        '/images/Home/blogTopics/dating.png',
      ),
      createRectangle(
        canvasWidth / 2 - 30,
        0,
        125,
        40,
        '/images/Home/blogTopics/ecom.png',
      ),
      createRectangle(
        canvasWidth / 2 - 30,
        0,
        90,
        40,
        '/images/Home/blogTopics/fin.png',
      ),
      createRectangle(
        canvasWidth / 2 - 30,
        0,
        125,
        40,
        '/images/Home/blogTopics/gig.png',
      ),
      createRectangle(
        canvasWidth / 2 + 30,
        0,
        110,
        40,
        '/images/Home/blogTopics/health.png',
      ),
      createRectangle(
        canvasWidth / 2 + 30,
        0,
        160,
        40,
        '/images/Home/blogTopics/location.png',
      ),
      createRectangle(
        canvasWidth / 2 + 30,
        0,
        125,
        40,
        '/images/Home/blogTopics/social.png',
      ),
      createRectangle(
        canvasWidth / 2 + 30,
        0,
        85,
        40,
        '/images/Home/blogTopics/travel.png',
      ),
    ]
    const grounds = [
      Bodies.rectangle(-50, canvasHeight / 2, 100, canvasHeight, {
        isStatic: true,
        render: {
          visible: false,
        },
      }),
      Bodies.rectangle(canvasWidth + 50, canvasHeight / 2, 100, canvasHeight, {
        isStatic: true,
        render: {
          visible: false,
        },
      }),
      Bodies.rectangle(canvasWidth / 2, canvasHeight + 50, canvasWidth, 100, {
        isStatic: true,
        render: {
          visible: false,
        },
      }),
      Bodies.rectangle(canvasWidth / 2, -50, canvasWidth, 100, {
        isStatic: true,
        render: {
          visible: false,
        },
      }),
    ]

    Composite.add(engine.world, [...topics, ...grounds])

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
  }

  // useEffect(() => {
  //   console.log('3')
  //
  //   setWidthCanvas(canvasParent.current?.offsetWidth)
  //   setHeightCanvas(canvasParent.current?.offsetHeight)
  // }, [width])
  // console.log('hello')

  useEffect(() => {
    setWidthCanvas(canvasParent.current?.offsetWidth)
    setHeightCanvas(canvasParent.current?.offsetHeight)
    if (isInView && canvasParent.current) {
      runCanvas()
    }
  }, [isInView])

  // useEffect(() => {
  //   setViewport((prev) => {
  //     if (width !== prev) {
  //       console.log('1')
  //       setKey((k) => k + 1)
  //       return width
  //     }
  //     return prev
  //   })
  // }, [width])

  return (
    <section className={styles['our-blog']}>
      <h3 className={classNames(styles['title'], 'h3')}>Our blog</h3>
      <div
        ref={canvasParent}
        className={classNames('swiper-no-swiping', styles['our-blog__canvas'])}
      >
        <canvas ref={canvasRef} />
      </div>
    </section>
  )
}

export default OurBlog
