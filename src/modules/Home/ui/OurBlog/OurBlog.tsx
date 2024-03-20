import React, { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import classNames from 'classnames'
import useWindowDimensions from '@/hooks/useWindowDimensions'
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
  const width = useWindowDimensions()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasParent = useRef<HTMLDivElement>(null)
  const engineRef = useRef<Engine | null>(null)
  const isInView = useInView(canvasParent)
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

  useEffect(() => {
    const width = canvasParent.current?.offsetWidth || 600
    const height = canvasParent.current?.offsetHeight || 600
    if (!canvasRef.current || !width || !height || engineRef.current) return

    engineRef.current = Engine.create()

    const engine = engineRef.current
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        wireframes: false,
        width: width - 1,
        height: height - 1,
        pixelRatio: 2,
        background: 'transparent',
      },
    })

    const topics = [
      createRectangle(
        width / 2 - 30,
        0,
        85,
        40,
        '/images/Home/blogTopics/dating.png',
      ),
      createRectangle(
        width / 2 - 30,
        0,
        125,
        40,
        '/images/Home/blogTopics/ecom.png',
      ),
      createRectangle(
        width / 2 - 30,
        0,
        90,
        40,
        '/images/Home/blogTopics/fin.png',
      ),
      createRectangle(
        width / 2 - 30,
        0,
        125,
        40,
        '/images/Home/blogTopics/gig.png',
      ),
      createRectangle(
        width / 2 + 30,
        0,
        110,
        40,
        '/images/Home/blogTopics/health.png',
      ),
      createRectangle(
        width / 2 + 30,
        0,
        160,
        40,
        '/images/Home/blogTopics/location.png',
      ),
      createRectangle(
        width / 2 + 30,
        0,
        125,
        40,
        '/images/Home/blogTopics/social.png',
      ),
      createRectangle(
        width / 2 + 30,
        0,
        85,
        40,
        '/images/Home/blogTopics/travel.png',
      ),
    ]
    const grounds = [
      Bodies.rectangle(-50, height / 2, 100, height, {
        isStatic: true,
        render: {
          visible: false,
        },
      }),
      Bodies.rectangle(width + 50, height / 2, 100, height, {
        isStatic: true,
        render: {
          visible: false,
        },
      }),
      Bodies.rectangle(width / 2, height + 50, width, 100, {
        isStatic: true,
        render: {
          visible: false,
        },
      }),
      Bodies.rectangle(width / 2, -50, width, 100, {
        isStatic: true,
        render: {
          visible: false,
        },
      }),
    ]

    Composite.add(engine.world, [...topics, ...grounds])

    const runner = Runner.create()

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
    engine.timing.timeScale = 0
    render.mouse = mouse
    Render.run(render)
    Runner.run(runner, engine)

    return () => {
      Render.stop(render)
      Composite.clear(engine.world, false)
      Engine.clear(engine)
      engineRef.current = null
    }
  }, [width])

  useEffect(() => {
    if (
      engineRef.current &&
      isInView &&
      engineRef.current.timing.timeScale === 0
    ) {
      engineRef.current.timing.timeScale = 1
    }
  }, [isInView, width])

  return (
    <section className={styles['our-blog']}>
      <h3 className={classNames(styles['title'], 'h3')}>Our blog</h3>
      <div
        ref={canvasParent}
        className={classNames(
          'swiper-no-swiping',
          styles['our-blog__canvas-wrapper'],
        )}
      >
        <canvas
          className={styles['our-blog__canvas-wrapper_canvas']}
          ref={canvasRef}
        />
      </div>
    </section>
  )
}

export default OurBlog
